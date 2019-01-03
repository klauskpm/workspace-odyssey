import { Component } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  template: `
    <mat-toolbar color="primary">Provider</mat-toolbar>
    <p>Application enviroment: {{environment}}</p>
    <app-displayer></app-displayer>
  `,
})
export class AppComponent {
  title = 'provider';
  environment: string = environment.title;
}
