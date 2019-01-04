import { Component } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  template: `
    <mat-toolbar color="primary">Provider - {{environment}}</mat-toolbar>
    <app-displayer></app-displayer>
  `,
})
export class AppComponent {
  title = 'provider';
  environment: string = environment.title;
}
