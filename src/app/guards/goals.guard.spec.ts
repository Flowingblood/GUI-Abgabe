import { TestBed } from '@angular/core/testing';

import { GoalsGuard } from './goals.guard';

describe('GoalsGuard', () => {
  let guard: GoalsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GoalsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
