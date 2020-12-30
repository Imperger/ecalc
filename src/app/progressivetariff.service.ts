import { Injectable } from '@angular/core';

import {IProgressiveCost} from './progressivecost';

@Injectable({
  providedIn: 'root'
})
export class ProgressiveTariffService {
  public costs: IProgressiveCost[] = [{cost: 168}];
}
