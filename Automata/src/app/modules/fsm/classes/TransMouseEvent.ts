import { FsmTransition } from './FsmTransition';

export class TransMouseEvent {
    transition: FsmTransition;
    event: MouseEvent;
    constructor(trans: FsmTransition, event: MouseEvent) {
        this.event = event;
        this.transition = trans;
    }
}
