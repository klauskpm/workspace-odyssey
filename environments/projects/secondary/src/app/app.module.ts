import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DisplayerComponent } from '../../../main/src/app/displayer/displayer.component';

import { ENVIRONMENT } from 'strategies';
import { environment } from '../environments/environment';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { EnvironmentDisplayerComponent } from '../../../main/src/app/environment-displayer/environment-displayer.component';
import { MatChipsModule, MatToolbarModule } from '@angular/material';

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
    {
      provide: ENVIRONMENT,
      useValue: { ...environment, label: 'Injected strategy' }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
