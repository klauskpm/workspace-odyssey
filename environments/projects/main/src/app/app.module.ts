import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DisplayerComponent } from './displayer/displayer.component';
import {
  DIRECT_PROVIDER,
  DOUBLE_EXTENDED_PROVIDER,
  EnvironmenterModule,
  EXTENDED_PROVIDER,
  injectToken
} from 'strategies';
import { environment } from '../environments/environment';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatChipsModule, MatToolbarModule } from '@angular/material';
import { EnvironmentDisplayerComponent } from './environment-displayer/environment-displayer.component';

const provider = { value: 'value' };

@NgModule({
  declarations: [
    AppComponent,
    DisplayerComponent,
    EnvironmentDisplayerComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatToolbarModule,
    MatChipsModule,
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
      useValue: { ...environment, provider }
    },
    {
      provide: DOUBLE_EXTENDED_PROVIDER,
      useValue: { ...environment, ...provider }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
