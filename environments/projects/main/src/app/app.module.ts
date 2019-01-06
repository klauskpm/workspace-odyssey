import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DisplayerComponent } from './displayer/displayer.component';
import { ENVIRONMENT } from 'strategies';
import { environment } from '../environments/environment';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatChipsModule, MatToolbarModule } from '@angular/material';
import { EnvironmentDisplayerComponent } from './environment-displayer/environment-displayer.component';

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
    {
      provide: ENVIRONMENT,
      useValue: { ...environment, label: 'Injected strategy' }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
