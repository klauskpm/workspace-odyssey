import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <mat-toolbar color="primary">{{title}} - Environments</mat-toolbar>
    <app-environment-displayer></app-environment-displayer>
  `
})
export class AppComponent {
  title = 'Moon';
}
