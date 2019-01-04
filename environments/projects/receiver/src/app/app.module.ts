import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DisplayerComponent } from '../../../provider/src/app/displayer/displayer.component';

import { injectEnvironment } from 'sharer';
import { environment } from '../environments/environment';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { EnvironmentDisplayerComponent } from '../../../provider/src/app/environment-displayer/environment-displayer.component';
import { MatChipsModule, MatToolbarModule } from '@angular/material';

const injectedEnvironment = injectEnvironment(environment);

@NgModule({
  declarations: [
    AppComponent,
    DisplayerComponent,
    EnvironmentDisplayerComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatChipsModule,
    MatToolbarModule
  ],
  providers: [
    injectedEnvironment
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
