import {IPhasesGroup} from '../phasesgroup.interface';
import {IPhase} from '../phase.interface';

export class OnePhasesGroup implements IPhasesGroup
{
    public phases: IPhase[] = [{title: 'Сутки', factor: 1}];
}