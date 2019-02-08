import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MoonComponent } from './moon/moon.component';
import { EarthComponent } from '$APP/earth/earth/earth.component';
import { SatelliteModule } from '$LIB/satellite';
import { EngineModule } from '$LIB/satellite/engine';


@NgModule({
  declarations: [
    AppComponent,
    MoonComponent,
    EarthComponent
  ],
  imports: [
    BrowserModule,
    SatelliteModule,
    EngineModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
