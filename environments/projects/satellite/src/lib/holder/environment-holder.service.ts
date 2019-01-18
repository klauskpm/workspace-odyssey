import { Injectable } from '@angular/core';
import { EnvironmentId } from './environment-id.enum';
import { Environmenter } from 'ng-environmenter';

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

  constructor(private environmenter: Environmenter) { }

  get() {
    const environment = this.environmenter.getEnvironment();
    return {
      ...environment,
      ...this.environments[environment.id]
    };
  }
}
