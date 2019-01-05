import { TestBed } from '@angular/core/testing';

import { CallerService } from './caller.service';

describe('CallerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CallerService = TestBed.get(CallerService);
    expect(service).toBeTruthy();
  });
});
