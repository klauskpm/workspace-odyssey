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

  constructor(
    private environmenter: Environmenter
  ) { }

  getEnvironment() {
    const applicationEnvironment = this.environmenter.getApplicationEnvironment();
    const globalEnvironment = this.environmenter.getGlobalEnvironment();
    const environment = this.environmenter.getEnvironment();

    return {
      title: 'Satellite',
      data: [
        this.generateHolderEnvironment(applicationEnvironment),
        this.generateHolderEnvironment(globalEnvironment),
        this.generateHolderEnvironment(environment)
      ]
    };
  }

  generateHolderEnvironment(environment) {
    const holderEnvironment = this.environments[environment.id] || {};
    return {
      ...environment,
      ...holderEnvironment
    };
  }
}
