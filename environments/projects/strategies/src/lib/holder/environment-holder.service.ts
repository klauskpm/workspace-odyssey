import { Inject, Injectable } from '@angular/core';
import { ENVIRONMENT } from '../injector/inject-environment';
import { EnvironmentId } from './environment-id.enum';

@Injectable({
  providedIn: 'root'
})
export class EnvironmentHolder {

  private environments = {
    [EnvironmentId.Development]: {
      label: 'Holder strategy'
    },
    [EnvironmentId.Production]: {
      label: 'Holder strategy'
    }
  };

  constructor(@Inject(ENVIRONMENT) private injectedEnvironment: any) { }

  get() {
    return {
      ...this.injectedEnvironment,
      ...this.environments[this.injectedEnvironment.id]
    };
  }
}
