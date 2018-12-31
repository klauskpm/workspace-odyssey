import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-displayer',
  template: `
    <h2>Displayer</h2>
    <p>Provider application environment: {{enviroment}}</p>
  `
})
export class DisplayerComponent implements OnInit {

  enviroment: string = environment.title;

  constructor() { }

  ngOnInit() {
  }

}
