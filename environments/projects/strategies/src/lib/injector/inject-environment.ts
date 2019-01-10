import { InjectionToken } from '@angular/core';
import { DIRECT_FUNCTION, DOUBLE_EXTENDED_FUNCTION, EXTENDED_FUNCTION } from '../tokens/tokens';

export const ENVIRONMENT = new InjectionToken<any>('Environment injection token');

const objFunc = { value: 'value' };

export function injectToken(environment) {
  return [
    {
      provide: ENVIRONMENT,
      useValue: environment
    },
    {
      provide: DIRECT_FUNCTION,
      useValue: environment
    },
    {
      provide: EXTENDED_FUNCTION,
      useValue: { ...environment, objFunc }
    },
    {
      provide: DOUBLE_EXTENDED_FUNCTION,
      useValue: { ...environment, ...objFunc }
    }
  ];
}
