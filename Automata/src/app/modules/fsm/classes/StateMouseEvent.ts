import { FsmState } from './FsmState';

export class StateMouseEvent {
    state: FsmState;
    event: MouseEvent;
    constructor(state: FsmState, event: MouseEvent) {
        this.event = event;
        this.state = state;
    }
}
