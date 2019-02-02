import { TestBed } from '@angular/core/testing';

import { SatelliteService } from './satellite.service';

describe('SatelliteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SatelliteService = TestBed.get(SatelliteService);
    expect(service).toBeTruthy();
  });
});
