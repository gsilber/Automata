import { Guid, Dictionary } from '../../../modules-reusable/typescript-utilities/typescript-utilities.module';
import { FsmState } from './FsmState';
import { FsmTransition } from './FsmTransition';

export class FSM {
    private _states: Dictionary<FsmState> = new Dictionary<FsmState>();
    private _id: string;

    public get id(): string { return this._id; }
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
        for (const state of this.states) {
            obj.data.push(state.toJSON());
        }
        return JSON.stringify(obj);
    }

    public get states(): FsmState[] { return this._states.Values(); }

    public getStateById(id: string): FsmState {
        return this._states.Item(id);
    }

    public AddState(state: FsmState) {
        this._states.Add(state.uniqueID, state);
    }
    public NewState(label: string, position = { x: 0, y: 0 }): FsmState {
        const guid: string = Guid.newGuid();
        const state: FsmState = new FsmState(guid, label, position);
        this.AddState(state);
        return state;
    }
    public clear() {
        this._states = new Dictionary<FsmState>();
    }
}

export { FsmState } from './FsmState';
export { FsmTransition } from './FsmTransition';
export { StateMouseEvent } from './StateMouseEvent';
export { TransMouseEvent } from './TransMouseEvent';
