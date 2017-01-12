import {IPhasesGroup} from '../phasesgroup.interface';
import {IPhase} from '../phase.interface';

export class TwoPhasesGroup implements IPhasesGroup
{
    public phases: IPhase[] = [{title: 'Ночь', factor: 0.5}, {title: 'День', factor: 1}];
}