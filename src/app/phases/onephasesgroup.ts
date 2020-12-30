import {IPhasesGroup} from '../phasesgroup';
import {IPhase} from '../phase';

export class OnePhasesGroup implements IPhasesGroup
{
    public phases: IPhase[] = [{title: 'Сутки', factor: 1}];
}