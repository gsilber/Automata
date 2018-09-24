import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FsmPropertiesComponent } from './fsm-properties.component';

describe('FsmPropertiesComponent', () => {
  let component: FsmPropertiesComponent;
  let fixture: ComponentFixture<FsmPropertiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FsmPropertiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FsmPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
