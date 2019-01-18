import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material';
import { EnvironmentDisplayerModule } from './environment-displayer/environment-displayer.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';
import { EnvironmenterModule } from 'ng-environmenter';

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
