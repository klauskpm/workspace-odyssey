import { Inject, Injectable } from '@angular/core';
import {
  DIRECT_FOR_ROOT,
  DIRECT_FUNCTION,
  DIRECT_PROVIDER,
  DOUBLE_EXTENDED_FOR_ROOT,
  DOUBLE_EXTENDED_FUNCTION,
  DOUBLE_EXTENDED_PROVIDER,
  EXTENDED_FOR_ROOT,
  EXTENDED_FUNCTION,
  EXTENDED_PROVIDER
} from '../tokens/tokens';
import { ENVIRONMENTER } from './environmenter.token';

@Injectable({
  providedIn: 'root'
})
export class Environmenter {

  constructor(
    @Inject(ENVIRONMENTER) public environment: any,

    @Inject(DIRECT_FOR_ROOT) private directForRoot: any,
    @Inject(EXTENDED_FOR_ROOT) private extendedForRoot: any,
    @Inject(DOUBLE_EXTENDED_FOR_ROOT) private doubleExtendedForRoot: any,

    @Inject(DIRECT_FUNCTION) private directFunction: any,
    @Inject(EXTENDED_FUNCTION) private extendedFunction: any,
    @Inject(DOUBLE_EXTENDED_FUNCTION) private doubleExtendedFunction: any,

    @Inject(DIRECT_PROVIDER) private directProvider: any,
    @Inject(EXTENDED_PROVIDER) private extendedProvider: any,
    @Inject(DOUBLE_EXTENDED_PROVIDER) private doubleExtendedProvider: any,
  ) {}

  public getForRootEnvironments() {
    return [
      this.directForRoot,
      this.extendedForRoot,
      this.doubleExtendedForRoot,
    ];
  }

  public getFunctionEnvironments() {
    return [
      this.directFunction,
      this.extendedFunction,
      this.doubleExtendedFunction,
    ];
  }

  public getProviderEnvironments() {
    return [
      this.directProvider,
      this.extendedProvider,
      this.doubleExtendedProvider,
    ];
  }
}
