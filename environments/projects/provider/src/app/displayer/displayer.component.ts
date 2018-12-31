import {Component, Inject, OnInit} from '@angular/core';
import { environment } from '../../environments/environment';
import { ENVIRONMENT, EnvironmentHolder, EnvironmentSharerService } from 'sharer';

@Component({
  selector: 'app-displayer',
  template: `
    <h2>Displayer</h2>
    <p>Provider application environment: {{environment}}</p>
    <p>Injected environemnt: {{injectedEnvironment.title}}</p>
    <p>Environment holder: {{environmentHolder.injectedEnvironment.title}}</p>
    <p>Environment sharer: {{environmentSharer.getEnvironment() | json:2}}</p>
  `
})
export class DisplayerComponent implements OnInit {

  environment: string = environment.title;

  constructor(
    @Inject(ENVIRONMENT) public injectedEnvironment: any,
    public environmentHolder: EnvironmentHolder,
    public environmentSharer: EnvironmentSharerService
  ) {}

  ngOnInit() {
  }

}
