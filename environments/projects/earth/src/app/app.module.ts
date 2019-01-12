import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material';
import { EnvironmentDisplayerModule } from './environment-displayer/environment-displayer.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    EnvironmentDisplayerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
