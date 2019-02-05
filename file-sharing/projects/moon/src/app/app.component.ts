import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <p>Moon app component</p>
    <earth-earth></earth-earth>
  `,
  styles: []
})
export class AppComponent {
  title = 'moon';
}
