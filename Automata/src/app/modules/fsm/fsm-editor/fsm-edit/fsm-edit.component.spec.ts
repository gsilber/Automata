import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FsmEditComponent } from './fsm-edit.component';

describe('FsmEditComponent', () => {
  let component: FsmEditComponent;
  let fixture: ComponentFixture<FsmEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FsmEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FsmEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
