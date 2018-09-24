import { FsmState } from './FsmState';

export class FsmTransition {
    destinationStateId: string;
    patternReg: RegExp = new RegExp('a');
}
