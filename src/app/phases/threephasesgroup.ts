import {IPhasesGroup} from '../phasesgroup.interface';
import {IPhase} from '../phase.interface';

export class ThreePhasesGroup implements IPhasesGroup
{
    public phases: IPhase[] = [{title: 'Ночь', factor: 0.4}, {title: 'Полупиковый', factor: 1}, {title: 'Пиковый', factor: 1.5}];
}