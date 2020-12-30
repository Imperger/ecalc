import {IPhasesGroup} from '../phasesgroup';
import {IPhase} from '../phase';

export class TwoPhasesGroup implements IPhasesGroup
{
    public phases: IPhase[] = [{title: 'Ночь', factor: 0.5}, {title: 'День', factor: 1}];
}