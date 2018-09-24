import { FsmTransition } from './FsmTransition';

export class FsmState {

    uniqueID: string;
    label: string;
    outboundTransitions: FsmTransition[];

    public static fromJSON(json): FsmState {
        const obj = JSON.parse(json);
        const state = new FsmState(obj.uniqueID, obj.label);
        state.outboundTransitions = obj.outboundTransitions;
        return state;
    }

    public toJSON(): string {
        return JSON.stringify({ uniqueID: this.uniqueID, label: this.label, outboundTransitions: this.outboundTransitions });
    }

    constructor(uniqueID: string, label: string) {
        this.uniqueID = uniqueID;
        this.label = label;
        this.outboundTransitions = [];
    }

    public AddTransition(destination: string, reg: RegExp) {
        const trans = new FsmTransition();
        trans.destinationStateId = destination;
        trans.patternReg = reg;
        this.outboundTransitions.push(trans);
    }
    public RemoveTransition(transition: FsmTransition) {
        this.outboundTransitions = this.outboundTransitions.filter(trans => trans !== transition);
    }

}
