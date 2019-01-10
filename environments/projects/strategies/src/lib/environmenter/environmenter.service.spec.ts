import { TestBed } from '@angular/core/testing';

import { EnvironmenterService } from './environmenter.service';

describe('EnvironmenterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EnvironmenterService = TestBed.get(EnvironmenterService);
    expect(service).toBeTruthy();
  });
});
