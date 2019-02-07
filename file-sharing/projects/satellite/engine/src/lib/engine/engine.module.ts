import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EngineComponent } from './engine.component';

@NgModule({
  declarations: [EngineComponent],
  exports: [EngineComponent],
  imports: [
    CommonModule
  ]
})
export class EngineModule { }
