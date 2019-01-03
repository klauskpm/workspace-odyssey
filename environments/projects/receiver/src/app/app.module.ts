import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DisplayerComponent } from '../../../provider/src/app/displayer/displayer.component';

import { injectEnvironment } from 'sharer';
import { environment } from '../environments/environment';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

const injectedEnvironment = injectEnvironment(environment);

@NgModule({
  declarations: [
    AppComponent,
    DisplayerComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule
  ],
  providers: [
    injectedEnvironment
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
