import { Component } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{title}}</h1>
    <p>Application enviroment: {{environment}}</p>
    <app-displayer></app-displayer>
  `,
})
export class AppComponent {
  title = 'provider';
  environment: string = environment.title;
}
