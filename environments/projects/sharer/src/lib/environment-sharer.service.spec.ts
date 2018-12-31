import { TestBed } from '@angular/core/testing';

import { EnvironmentSharerService } from './environment-sharer.service';

describe('EnvironmentSharerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EnvironmentSharerService = TestBed.get(EnvironmentSharerService);
    expect(service).toBeTruthy();
  });
});
