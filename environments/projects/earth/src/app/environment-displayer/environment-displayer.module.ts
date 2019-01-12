import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnvironmentDisplayerComponent } from './environment-displayer.component';
import { MatChipsModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatChipsModule,
  ],
  declarations: [EnvironmentDisplayerComponent],
  exports: [EnvironmentDisplayerComponent]
})
export class EnvironmentDisplayerModule { }
