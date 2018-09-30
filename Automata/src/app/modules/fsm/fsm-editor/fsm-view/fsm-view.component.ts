import { Input, Output, Component, OnInit, ViewChild, ElementRef, HostListener, EventEmitter } from '@angular/core';
import { FsmService } from '../../services/fsm.service';
import { FSM, FsmState, FsmTransition, StateMouseEvent, TransMouseEvent } from '../../classes/FSM';


@Component({
    // tslint:disable-next-line:component-selector
    selector: 'fsm-view',
    templateUrl: './fsm-view.component.html',
    styleUrls: ['./fsm-view.component.css']
})
export class FsmViewComponent implements OnInit {
    private _scale = 1;
    @ViewChild('outsideDiv') outsideDiv: ElementRef;

    // State Mouse Events
    @Output() stateClick: EventEmitter<StateMouseEvent> = new EventEmitter<StateMouseEvent>();
    @Output() stateDblClick: EventEmitter<StateMouseEvent> = new EventEmitter<StateMouseEvent>();
    @Output() stateMouseDown: EventEmitter<StateMouseEvent> = new EventEmitter<StateMouseEvent>();
    @Output() stateMouseUp: EventEmitter<StateMouseEvent> = new EventEmitter<StateMouseEvent>();
    @Output() stateMouseEnter: EventEmitter<StateMouseEvent> = new EventEmitter<StateMouseEvent>();
    @Output() stateMouseLeave: EventEmitter<StateMouseEvent> = new EventEmitter<StateMouseEvent>();
    @Output() stateMouseMove: EventEmitter<StateMouseEvent> = new EventEmitter<StateMouseEvent>();
    @Output() stateMouseOver: EventEmitter<StateMouseEvent> = new EventEmitter<StateMouseEvent>();

    // Trans Mouse Events
    @Output() transClick: EventEmitter<TransMouseEvent> = new EventEmitter<TransMouseEvent>();
    @Output() transDblClick: EventEmitter<TransMouseEvent> = new EventEmitter<TransMouseEvent>();
    @Output() transMouseDown: EventEmitter<TransMouseEvent> = new EventEmitter<TransMouseEvent>();
    @Output() transMouseUp: EventEmitter<TransMouseEvent> = new EventEmitter<TransMouseEvent>();
    @Output() transMouseEnter: EventEmitter<TransMouseEvent> = new EventEmitter<TransMouseEvent>();
    @Output() transMouseLeave: EventEmitter<TransMouseEvent> = new EventEmitter<TransMouseEvent>();
    @Output() transMouseMove: EventEmitter<TransMouseEvent> = new EventEmitter<TransMouseEvent>();
    @Output() transMouseOver: EventEmitter<TransMouseEvent> = new EventEmitter<TransMouseEvent>();

    // Scaling and scrolling values
    @Input() canvasSize = 4000;
    @Input() fsm: FSM;
    @Input() stateRadius = 25;
    @Input() inEditor = false;
    @Input() selected: Object = null;

    set scalePercent(percent: number) {
        const val = percent / 100;
        if (val <= 2 && val >= .25) {
            this._scale = val;
        }
    }
    get scalePercent(): number {
        return Math.floor(this._scale * 100);
    }
    get windowSize(): number { return this.canvasSize * 4; }
    get scrollSize(): number { return this.canvasSize * this._scale; }
    get scaleBox(): string {
        return '0 0 ' + (this.windowSize / this._scale) + ' ' + (this.windowSize / this._scale);
    }

    // Point Utilities
    private static distance(point1: { x: number, y: number }, point2: { x: number, y: number }) {
        return Math.sqrt(Math.pow(point1.x - point2.x, 2) + Math.pow(point1.y - point2.y, 2));
    }
    private static angle(point1: { x: number, y: number }, point2: { x: number, y: number }) {
        return Math.atan2(point2.y - point1.y, point2.x - point1.x);
    }
    private static angled(point1: { x: number, y: number }, point2: { x: number, y: number }) {
        return this.angle(point1, point2) * 180 / Math.PI;
    }
    // application
    constructor(_fsmSvc: FsmService) {
        this.fsm = _fsmSvc.getFsm();
    }

    ngOnInit() {
    }

    getSelfTransPath(state: FsmState) {
        const xPos = +state.position.x + +this.stateRadius;
        const yPos = state.position.y - this.stateRadius - 18;
        const startPt = xPos + ' ' + state.position.y;
        const endPt = state.position.x + ' ' + yPos;
        return 'M ' + startPt + 'A ' + this.stateRadius * 1.05 + ' ' + this.stateRadius * 1.05 + ' 0 1 0 ' + endPt;

    }
    getTransPath(state: FsmState, trans: FsmTransition): string {
        const destState = this.fsm.getStateById(trans.destinationStateId);
        const distance = FsmViewComponent.distance(state.position, destState.position);
        const cp = { x: state.position.x + distance / 2, y: state.position.y + trans.offset };
        const offsetAngle = FsmViewComponent.angle(state.position, cp);
        const offset = { x: Math.cos(offsetAngle) * this.stateRadius, y: Math.sin(offsetAngle) * this.stateRadius };
        const c1 = { x: state.position.x + offset.x, y: state.position.y + offset.y };
        const c2 = { x: state.position.x + distance - offset.x, y: c1.y };
        return 'M 0 0 q ' + (cp.x - c1.x) + ' ' + (cp.y - c1.y) + ' ' + (c2.x - c1.x) + ' 0';

    }

    getTransTransform(state: FsmState, trans: FsmTransition): string {
        const destState = this.fsm.getStateById(trans.destinationStateId);
        const distance = FsmViewComponent.distance(state.position, destState.position);
        const cp = { x: state.position.x + distance / 2, y: state.position.y + trans.offset };
        const offsetAngle = FsmViewComponent.angle(state.position, cp);
        const offset = { x: Math.cos(offsetAngle) * this.stateRadius, y: Math.sin(offsetAngle) * this.stateRadius };
        const c1 = { x: state.position.x + offset.x, y: state.position.y + offset.y };
        return 'translate(' + c1.x + ',' + c1.y + ')  rotate(' + FsmViewComponent.angled(state.position,
            this.fsm.getStateById(trans.destinationStateId).position) + ' -' + offset.x + ',-' + offset.y + ')';
    }

    // encorce window is a square
    @HostListener('window:resize') onResize() {
        if (this.outsideDiv) {
            this.outsideDiv.nativeElement.height = this.outsideDiv.nativeElement.clientWidth;
        }
    }

    // State Event Handlers
    onStateClick(event: MouseEvent, state: FsmState) { this.emitStateMouseEvent(this.stateClick, state, event); }
    onStateDblClick(event: MouseEvent, state: FsmState) { this.emitStateMouseEvent(this.stateDblClick, state, event); }
    onStateMouseDown(event: MouseEvent, state: FsmState) { this.emitStateMouseEvent(this.stateMouseDown, state, event); }
    onStateMouseUp(event: MouseEvent, state: FsmState) { this.emitStateMouseEvent(this.stateMouseUp, state, event); }
    onStateMouseEnter(event: MouseEvent, state: FsmState) { this.emitStateMouseEvent(this.stateMouseEnter, state, event); }
    onStateMouseLeave(event: MouseEvent, state: FsmState) { this.emitStateMouseEvent(this.stateMouseLeave, state, event); }
    onStateMouseMove(event: MouseEvent, state: FsmState) { this.emitStateMouseEvent(this.stateMouseMove, state, event); }
    onStateMouseOver(event: MouseEvent, state: FsmState) { this.emitStateMouseEvent(this.stateMouseOver, state, event); }

    emitStateMouseEvent(destEvent: EventEmitter<StateMouseEvent>, state: FsmState, srcEvent: MouseEvent) {
        if (this.inEditor) {
            destEvent.emit(new StateMouseEvent(state, srcEvent));
        }
    }
    // Transition EventHandlers
    onTransClick(event: MouseEvent, trans: FsmTransition) { this.emitTransMouseEvent(this.transClick, trans, event); }
    onTransDblClick(event: MouseEvent, trans: FsmTransition) { this.emitTransMouseEvent(this.transDblClick, trans, event); }
    onTransMouseDown(event: MouseEvent, trans: FsmTransition) { this.emitTransMouseEvent(this.transMouseDown, trans, event); }
    onTransMouseUp(event: MouseEvent, trans: FsmTransition) { this.emitTransMouseEvent(this.transMouseUp, trans, event); }
    onTransMouseEnter(event: MouseEvent, trans: FsmTransition) { this.emitTransMouseEvent(this.transMouseEnter, trans, event); }
    onTransMouseLeave(event: MouseEvent, trans: FsmTransition) { this.emitTransMouseEvent(this.transMouseLeave, trans, event); }
    onTransMouseMove(event: MouseEvent, trans: FsmTransition) { this.emitTransMouseEvent(this.transMouseMove, trans, event); }
    onTransMouseOver(event: MouseEvent, trans: FsmTransition) { this.emitTransMouseEvent(this.transMouseOver, trans, event); }

    emitTransMouseEvent(destEvent: EventEmitter<TransMouseEvent>, trans: FsmTransition, srcEvent: MouseEvent) {
        if (this.inEditor) {
            destEvent.emit(new TransMouseEvent(trans, srcEvent));
        }
    }

}
