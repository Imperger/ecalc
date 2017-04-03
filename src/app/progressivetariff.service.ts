import { Injectable } from '@angular/core';
import {IProgressiveCost} from './progressivecost.interface';

@Injectable()
export class ProgressiveTariffService {
    public costs: IProgressiveCost[] = [{cost: 90, limit: 100}, {cost: 168}];
}
