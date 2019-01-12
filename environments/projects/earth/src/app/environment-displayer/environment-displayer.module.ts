import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnvironmentDisplayerComponent } from './environment-displayer.component';
import { MatExpansionModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatExpansionModule
  ],
  declarations: [EnvironmentDisplayerComponent],
  exports: [EnvironmentDisplayerComponent]
})
export class EnvironmentDisplayerModule { }
