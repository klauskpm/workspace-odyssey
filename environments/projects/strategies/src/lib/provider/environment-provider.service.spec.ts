import { TestBed } from '@angular/core/testing';

import { EnvironmentProvider } from './environment-provider.service';

describe('EnvironmentProvider', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EnvironmentProvider = TestBed.get(EnvironmentProvider);
    expect(service).toBeTruthy();
  });
});
