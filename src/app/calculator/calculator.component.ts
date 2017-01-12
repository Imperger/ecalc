import { Component, OnInit } from '@angular/core';
import {ProcessorService} from './../processor.service';
import {IPhasesGroupConstructor} from './../phasesgroupconstructor.interface';
import {IPhasesGroup} from './../phasesgroup.interface';
import {OnePhasesGroup} from './../phases/onephasesgroup';
import {TwoPhasesGroup} from './../phases/twophasesgroup';
import {ThreePhasesGroup} from './../phases/threephasesgroup';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  private avaliabePhasesGroups: {name:string, class: IPhasesGroupConstructor}[] = 
  [{name: '1-зонный тариф', class: OnePhasesGroup},
  {name: '2-зонный тариф', class: TwoPhasesGroup},
  {name: '3-зонный тариф', class: ThreePhasesGroup}];

  constructor(private processor: ProcessorService) 
  {
  }
  public selectPhasesGroup(id: number)
  {
    this.processor.setPhasesGroup(new this.avaliabePhasesGroups[id].class());
  }

  ngOnInit() {
  }

}
