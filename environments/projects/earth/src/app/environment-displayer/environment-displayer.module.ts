import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnvironmentDisplayerComponent } from './environment-displayer.component';
import { MatExpansionModule, MatGridListModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatExpansionModule,
    MatGridListModule
  ],
  declarations: [EnvironmentDisplayerComponent],
  exports: [EnvironmentDisplayerComponent]
})
export class EnvironmentDisplayerModule { }
