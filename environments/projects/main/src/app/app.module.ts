import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DisplayerComponent } from './displayer/displayer.component';
import { injectEnvironment } from 'strategies';
import { environment } from '../environments/environment';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatChipsModule, MatToolbarModule } from '@angular/material';
import { EnvironmentDisplayerComponent } from './environment-displayer/environment-displayer.component';

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
    MatToolbarModule,
    MatChipsModule
  ],
  providers: [
    injectedEnvironment
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
