import { InjectionToken } from '@angular/core';

export const ENVIRONMENT = new InjectionToken<any>('Environment injection token');

export function injectEnvironment(environment: any) {
  return {
    provide: ENVIRONMENT,
    useValue: {
      ...environment,
      label: 'Injected strategy'
    }
  };
}
