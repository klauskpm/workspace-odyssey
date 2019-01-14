import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DIRECT_FOR_ROOT, DOUBLE_EXTENDED_FOR_ROOT, EXTENDED_FOR_ROOT } from '../tokens/tokens';
import { ENVIRONMENTER } from './environmenter.token';

const forRoot = { strategy: 'forRoot' };

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class EnvironmenterModule {
  static forRoot(environment: any): ModuleWithProviders {
    return {
      ngModule: EnvironmenterModule,
      providers: [
        {
          provide: ENVIRONMENTER,
          useValue: environment
        },
        {
          provide: DIRECT_FOR_ROOT,
          useValue: environment
        },
        {
          provide: EXTENDED_FOR_ROOT,
          useValue: {
            global: { ...environment.global },
            application: { ...environment.application, forRoot }
          }
        },
        {
          provide: DOUBLE_EXTENDED_FOR_ROOT,
          useValue: {
            global: { ...environment.global },
            application: { ...environment.application, ...forRoot }
          }
        }
      ]
    };
  }
}
