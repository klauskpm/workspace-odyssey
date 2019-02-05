import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <p>Moon app component</p>
    <ear-earth></ear-earth>
  `,
  styles: []
})
export class AppComponent {
  title = 'moon';
}
