import { InjectionToken } from '@angular/core';
import { DIRECT_FUNCTION, DOUBLE_EXTENDED_FUNCTION, EXTENDED_FUNCTION } from '../tokens/tokens';

export const ENVIRONMENT = new InjectionToken<any>('Environment injection token');

const objFunc = { strategy: 'inject' };

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
      useValue: {
        global: { ...environment.global },
        application: { ...environment.application, objFunc }
      }
    },
    {
      provide: DOUBLE_EXTENDED_FUNCTION,
      useValue: {
        global: { ...environment.global },
        application: { ...environment.application, ...objFunc }
      }
    }
  ];
}
