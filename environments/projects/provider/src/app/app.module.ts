import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DisplayerComponent } from './displayer/displayer.component';
import { injectEnvironment } from 'sharer';
import { environment } from '../environments/environment';

const injectedEnvironment = injectEnvironment(environment);

@NgModule({
  declarations: [
    AppComponent,
    DisplayerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    injectedEnvironment
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
