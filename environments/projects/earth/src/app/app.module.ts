import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material';
import { EnvironmentDisplayerModule } from './environment-displayer/environment-displayer.module';
import {
  DIRECT_PROVIDER,
  DOUBLE_EXTENDED_PROVIDER,
  EnvironmenterModule,
  EXTENDED_PROVIDER,
  injectToken
} from 'satellite';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const provider = { strategy: 'provider' };

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    EnvironmentDisplayerModule,
    EnvironmenterModule.forRoot(environment)
  ],
  providers: [
    ...injectToken(environment),
    {
      provide: DIRECT_PROVIDER,
      useValue: environment
    },
    {
      provide: EXTENDED_PROVIDER,
      useValue: {
        global: { ...environment.global },
        application: { ...environment.application, provider }
      }
    },
    {
      provide: DOUBLE_EXTENDED_PROVIDER,
      useValue: {
        global: { ...environment.global },
        application: { ...environment.application, ...provider }
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
