import { TestBed } from '@angular/core/testing';

import { FsmService } from './fsm.service';

describe('FsmService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FsmService = TestBed.get(FsmService);
    expect(service).toBeTruthy();
  });
});
