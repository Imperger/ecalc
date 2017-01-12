import { Injectable } from '@angular/core';

import { ProgressiveTariffService } from './progressivetariff.service';
import { IPhasesGroup } from './phasesgroup.interface';
import { TwoPhasesGroup } from './phases/twophasesgroup';
import { IProgressiveCost } from './progressivecost.interface';

@Injectable()
export class ProcessorService {
  public consumptions: number[] = [0, 0];
  public phasesGroup: IPhasesGroup = new TwoPhasesGroup();
  
  constructor(public tariff: ProgressiveTariffService) { }

  public setPhasesGroup(group: IPhasesGroup)
  {
    this.consumptions.length = group.phases.length;
    this.consumptions.fill(0);
    this.phasesGroup = group;
  }
  public calculate() {
    let totalConsumption = this.consumptions.reduce((prev, cons) => typeof cons == 'undefined'? prev: prev + cons);
    if (totalConsumption == 0) {
      return 0;
    }
    let consumptionsRates = Array.from(this.consumptions, consumption => (typeof consumption == 'undefined'? 0: consumption) / totalConsumption);
    let prevLimit = 0;
    let payment = 0;

    this.tariff.costs.every((cost) => {
      let consumption = 0;
      let isContinue: boolean = false;
      if (cost.limit) {
        isContinue = totalConsumption >= cost.limit;
        consumption = isContinue ? cost.limit - prevLimit : totalConsumption - prevLimit;
      }
      else {
        consumption = totalConsumption - prevLimit;
      }
      this.phasesGroup.phases.forEach((phase, phaseIdx) => {
        payment += consumption * consumptionsRates[phaseIdx] * phase.factor * cost.cost;
      });
      prevLimit = cost.limit;
      return isContinue;
    });
    return Math.round(payment);
  }
  public removePhase(phaseIdx: number) {
    if (this.phasesGroup.phases.length > 1) {
      this.consumptions.splice(phaseIdx, 1);
      this.phasesGroup.phases.splice(phaseIdx, 1);
    }
  }
  public addPhase(title: string, factor: number) {
    this.consumptions.push(0);
    this.phasesGroup.phases.push({ title: title, factor: factor });
  }
  public removeLimit(limitIdx: number) {
    this.tariff.costs.splice(limitIdx, 1);
  }
  public addLimit() {
    if (this.tariff.costs.length > 1) {
      this.tariff.costs[this.tariff.costs.length-1].limit = this.tariff.costs[this.tariff.costs.length-2].limit + 1;
      this.tariff.costs.push({cost: 0});
    }
    else {
      this.tariff.costs.unshift({cost: 0, limit: 100});
    }
  }
  public limitedCosts() {
    return this.tariff.costs.slice(0, this.tariff.costs.length - 1);
  }
  public back(): IProgressiveCost {
    return {
      cost: this.tariff.costs[this.tariff.costs.length - 1].cost,
      limit: this.tariff.costs[this.tariff.costs.length - 2].limit
    };
  }
}
