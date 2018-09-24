import { FsmTransition } from './FsmTransition';

export class FsmState {

    uniqueID: string;
    label: string;
    outboundTransitions: FsmTransition[];
    position: { x: number, y: number };
    start = false;
    final = false;

    public static fromJSON(json): FsmState {
        const obj = JSON.parse(json);
        const state = new FsmState(obj.uniqueID, obj.label, obj.position, obj.start, obj.final);
        state.outboundTransitions = obj.outboundTransitions;
        return state;
    }

    public toJSON(): string {
        return JSON.stringify({
            uniqueID: this.uniqueID, label: this.label, position: this.position, start: this.start, final: this.final,
            outboundTransitions: this.outboundTransitions
        });
    }

    constructor(uniqueID: string, label: string, position = { x: 0, y: 0 }, start: boolean = false, final: boolean = false) {
        this.uniqueID = uniqueID;
        this.label = label;
        this.outboundTransitions = [];
        this.position = position;
        this.start = start;
        this.final = final;
    }

    public AddTransition(destination: FsmState, reg: string) {
        const trans = new FsmTransition();
        trans.destinationStateId = destination.uniqueID;
        trans.pattern = reg;
        this.outboundTransitions.push(trans);
    }
    public RemoveTransition(transition: FsmTransition) {
        this.outboundTransitions = this.outboundTransitions.filter(trans => trans !== transition);
    }

}
