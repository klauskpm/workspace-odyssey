import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EnvironmentDisplayerModule } from './environment-displayer/environment-displayer.module';
import { MatToolbarModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatToolbarModule,
    EnvironmentDisplayerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
