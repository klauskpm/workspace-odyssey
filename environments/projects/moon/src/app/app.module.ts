import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material';
import { EnvironmentDisplayerModule } from '../../../earth/src/app/environment-displayer/environment-displayer.module';
import { environment } from '../environments/environment';
import {
  DIRECT_PROVIDER,
  DOUBLE_EXTENDED_PROVIDER,
  EnvironmenterModule,
  EXTENDED_PROVIDER,
  injectToken
} from 'satellite';

const provider = { value: 'provider' };

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
