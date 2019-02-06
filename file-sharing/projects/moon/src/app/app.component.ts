import { Component } from '@angular/core';

@Component({
  selector: 'moo-root',
  template: `
    <p>Moon app component</p>
    <ear-earth></ear-earth>
    <stlt-satellite></stlt-satellite>
  `,
  styles: []
})
export class AppComponent {
  title = 'moon';
}
