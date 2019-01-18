import { TestBed } from '@angular/core/testing';

import { EnvironmentProviderService } from './environment-provider.service';

describe('EnvironmentProviderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EnvironmentProviderService = TestBed.get(EnvironmentProviderService);
    expect(service).toBeTruthy();
  });
});
