import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DisplayerComponent } from '../../../provider/src/app/displayer/displayer.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
