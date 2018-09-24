import { Injectable } from '@angular/core';
import { Dictionary } from '../../../modules-reusable/typescript-utilities/typescript-utilities.module';
import { FSM } from '../classes/FSM';

@Injectable({
  providedIn: 'root'
})
export class FsmService {

  private fsmMap: Dictionary<FSM> = new Dictionary<FSM>();

  constructor() { }

  getFsm(id = '_default'): FSM {
    if (this.fsmMap.ContainsKey(id)) {
      return this.fsmMap.Item(id);
    }
    const newFSM = new FSM(id);
    this.fsmMap.Add(id, newFSM);
    return newFSM;
  }

  setFsm(fsm: FSM) {
    if (this.fsmMap.ContainsKey(fsm.id)) {
      this.fsmMap.Remove(fsm.id);
    }
    this.fsmMap.Add(fsm.id, fsm);
  }
}
