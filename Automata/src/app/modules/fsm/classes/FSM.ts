import { Guid, Dictionary } from '../../../modules-reusable/typescript-utilities/typescript-utilities.module';
import { FsmState } from './FsmState';
import { FsmTransition } from './FsmTransition';

export class FSM {
    private _states: Dictionary<FsmState>;
    private _id: string;

    constructor(id: string) {
        this._id = id;
    }
    public static fromJSON(json: string): FSM {
        const obj = JSON.parse(json);
        const fsm: FSM = new FSM(obj.id);
        for (const objState of obj.data) {
            fsm.AddState(FsmState.fromJSON(objState));
        }
        return fsm;
    }

    public toJSON(): string {
        const obj = { id: this._id, data: [] };
        for (const state of this.states()) {
            obj.data.push(state.toJSON());
        }
        return JSON.stringify(obj);
    }

    public states = (): FsmState[] => this._states.Values();

    public AddState(state: FsmState) {
        this._states.Add(state.uniqueID, state);
    }
    public NewState(label: string): FsmState {
        const guid: string = Guid.newGuid();
        const state: FsmState = new FsmState(guid, label);
        this.AddState(state);
        return state;
    }
}

export { FsmState } from './FsmState';
export { FsmTransition } from './FsmTransition';
