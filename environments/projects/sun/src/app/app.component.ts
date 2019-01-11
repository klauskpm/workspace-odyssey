import { Component } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  template: `
    <mat-toolbar color="primary">{{title}} - {{environment | json}}</mat-toolbar>
    <app-environment-displayer></app-environment-displayer>
  `
})
export class AppComponent {
  title = 'Sun';
  environment = environment;
}
