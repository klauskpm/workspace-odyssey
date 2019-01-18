import { Injectable } from '@angular/core';
import { Environmenter } from 'ng-environmenter';

@Injectable({
  providedIn: 'root'
})
export class EnvironmentProviderService {

  constructor(
    private environmenter: Environmenter
  ) { }

  getEnvironment() {
    return {
      title: 'Moon',
      data: [
        this.environmenter.getApplicationEnvironment(),
        this.environmenter.getGlobalEnvironment(),
        this.environmenter.getEnvironment(),
      ]
    };
  }
}
