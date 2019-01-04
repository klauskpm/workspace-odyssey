import { Inject, Injectable } from '@angular/core';
import { ENVIRONMENT } from '../injector/inject-environment';
import { EnvironmentId } from './environment-id.enum';

@Injectable({
  providedIn: 'root'
})
export class EnvironmentHolder {

  private environments = {
    [EnvironmentId.Development]: {
      id: 5,
      label: 'Holder strategy',
      title: 'Holder Development'
    },
    [EnvironmentId.Production]: {
      id: 5,
      label: 'Holder strategy',
      title: 'Holder Production'
    }
  };

  constructor(@Inject(ENVIRONMENT) private injectedEnvironment: any) { }

  get() {
    return this.environments[this.injectedEnvironment.id] || {};
  }
}
