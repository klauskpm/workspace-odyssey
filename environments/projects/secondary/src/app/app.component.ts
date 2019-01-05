import { Component } from '@angular/core';
import { environment } from '../environments/environment';


@Component({
  selector: 'app-root',
  template: `
    <mat-toolbar color="primary">{{title}} - {{environment}}</mat-toolbar>
    <app-displayer></app-displayer>
  `,
  styles: []
})
export class AppComponent {
  environment: string = environment.title;

  title = 'Secondary';
}
