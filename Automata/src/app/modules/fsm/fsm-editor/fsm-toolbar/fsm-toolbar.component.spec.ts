import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FsmToolbarComponent } from './fsm-toolbar.component';

describe('FsmToolbarComponent', () => {
  let component: FsmToolbarComponent;
  let fixture: ComponentFixture<FsmToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FsmToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FsmToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
