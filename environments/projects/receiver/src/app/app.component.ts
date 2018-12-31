import { Component } from '@angular/core';
import { environment } from '../environments/environment';


@Component({
  selector: 'app-root',
  template: `
    <h1>{{title}}</h1>
    <p>Application enviroment: {{environment}}</p>
    <app-displayer></app-displayer>
  `,
  styles: []
})
export class AppComponent {
  environment: string = environment.title;

  title = 'receiver';
}
