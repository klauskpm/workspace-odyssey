import { Inject, Injectable } from '@angular/core';
import { ENVIRONMENT } from '../injector/inject-environment';

@Injectable({
  providedIn: 'root'
})
export class EnvironmentProvider {

  constructor(@Inject(ENVIRONMENT) private injectedEnvironment: any) { }

  get() {
    return {
      ...this.injectedEnvironment,
      label: 'Provider Strategy'
    };
  }
}
