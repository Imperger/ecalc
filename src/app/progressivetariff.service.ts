import { Injectable } from '@angular/core';
import {IProgressiveCost} from './progressivecost.interface';

@Injectable()
export class ProgressiveTariffService {
    public costs: IProgressiveCost[] = [{cost: 71.4, limit: 100}, {cost: 129, limit: 600}, {cost: 163.8}];
}
