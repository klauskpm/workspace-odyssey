import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material';
import { EnvironmentDisplayerModule } from '../../../earth/src/app/environment-displayer/environment-displayer.module';
import { EnvironmenterModule } from 'ng-environmenter';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    EnvironmentDisplayerModule,
    EnvironmenterModule.forRoot(environment)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
