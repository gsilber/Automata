import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FsmStatusComponent } from './fsm-status.component';

describe('FsmStatusComponent', () => {
  let component: FsmStatusComponent;
  let fixture: ComponentFixture<FsmStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FsmStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FsmStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
