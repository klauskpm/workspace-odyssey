import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MoonComponent } from './moon/moon.component';
import { EarthComponent } from '$APP/earth/earth/earth.component';
import { SatelliteComponent } from 'satellite';

@NgModule({
  declarations: [
    AppComponent,
    MoonComponent,
    EarthComponent,
    SatelliteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
