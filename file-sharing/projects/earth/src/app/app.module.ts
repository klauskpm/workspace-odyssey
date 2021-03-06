import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EarthComponent } from './earth/earth.component';

@NgModule({
  declarations: [
    AppComponent,
    EarthComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [EarthComponent]
})
export class AppModule { }
