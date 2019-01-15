import { Inject, Injectable } from '@angular/core';
import { ENVIRONMENTER } from './environmenter.token';

@Injectable({
  providedIn: 'root'
})
export class Environmenter {

  constructor(
    @Inject(ENVIRONMENTER) public environment: any,
  ) {}

  public getGlobalEnvironment(environment?) {
    return (environment || this.environment).global;
  }

  public getApplicationEnvironment(environment?) {
    return (environment || this.environment).application;
  }

  public getEnvironment(environment?) {
    const newEnvironment = { ...(environment || this.environment) };

    return {
      ...newEnvironment.global,
      ...newEnvironment.application
    };
  }
}
