import {Inject, Injectable} from '@angular/core';
import { ENVIRONMENT } from './injector/inject-environment';

@Injectable({
  providedIn: 'root'
})
export class EnvironmentHolder {

  constructor(@Inject(ENVIRONMENT) public injectedEnvironment: any) { }
}
