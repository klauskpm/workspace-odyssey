import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GLOBAL_ENVIRONMENT } from './global-environment.token';
import { DIRECT_FOR_ROOT, DOUBLE_EXTENDED_FOR_ROOT, EXTENDED_FOR_ROOT } from '../tokens/tokens';

const forRoot = { value: 'value' };

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
          provide: GLOBAL_ENVIRONMENT,
          useValue: environment
        },
        {
          provide: DIRECT_FOR_ROOT,
          useValue: environment
        },
        {
          provide: EXTENDED_FOR_ROOT,
          useValue: { ...environment, forRoot }
        },
        {
          provide: DOUBLE_EXTENDED_FOR_ROOT,
          useValue: { ...environment, ...forRoot }
        }
      ]
    };
  }
}
