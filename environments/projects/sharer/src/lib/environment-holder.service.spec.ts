import { TestBed } from '@angular/core/testing';

import { EnvironmentHolder } from './environment-holder.service';

describe('EnvironmentHolderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EnvironmentHolder = TestBed.get(EnvironmentHolder);
    expect(service).toBeTruthy();
  });
});
