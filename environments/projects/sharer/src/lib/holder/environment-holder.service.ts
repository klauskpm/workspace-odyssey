import { Inject, Injectable } from '@angular/core';
import { ENVIRONMENT } from '../injector/inject-environment';
import { EnvironmentId } from './environment-id.enum';

@Injectable({
  providedIn: 'root'
})
export class EnvironmentHolder {

  private environments = {
    [EnvironmentId.Development]: {
      title: 'Holder Development',
      secretKey: '7Y1H92912H9D81D',
    },
    [EnvironmentId.Production]: {
      title: 'Holder Production',
      secretKey: '9A8USDJ2083JD2'
    }
  };

  constructor(@Inject(ENVIRONMENT) private injectedEnvironment: any) { }

  getEnvironment() {
    return this.environments[this.injectedEnvironment.id] || {};
  }
}
