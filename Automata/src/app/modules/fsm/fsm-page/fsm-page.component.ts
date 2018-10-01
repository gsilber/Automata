import { Component, OnInit } from '@angular/core';
import { FsmService } from '../services/fsm.service';
import { FSM, FsmState, FsmTransition } from '../classes/FSM';

@Component({
  selector: 'app-fsm-page',
  templateUrl: './fsm-page.component.html',
  styleUrls: ['./fsm-page.component.css']
})
export class FsmPageComponent implements OnInit {

  enteredText = '';

  fsm: FSM;
  get json() {
    return this.fsm ? this.fsm.toJSON() : '';
  }
  set json(str: string) {
    this.fsm = FSM.fromJSON(str);
    this._fsmSvc.setFsm(this.fsm);
  }

  constructor(private _fsmSvc: FsmService) {
    this.fsm = _fsmSvc.getFsm();
    this.testCreateFSM();

  }

  clear() {
    this.fsm.clear();

  }


  testCreateFSM() {
    this.clear();
    const state1 = this.fsm.NewState('Q1', { x: 100, y: 100 });
    const state2 = this.fsm.NewState('Q2', { x: 200, y: 200 });
    state2.start = true;
    state2.final = true;
    state1.AddTransition(state2, 'a|b');
    state1.outboundTransitions[0].offset = 50;
    state2.AddTransition(state2, 'a');
    state2.AddTransition(state1, 'b');
    state2.outboundTransitions[1].offset = 50;
    state2.outboundTransitions[0].offset = 0;


  }
  fromJSON() {
    this.fsm.clear();
    const fsm = FSM.fromJSON(this.enteredText);
    if (fsm) { this.fsm = fsm; }

  }
  ngOnInit() {
  }

}
