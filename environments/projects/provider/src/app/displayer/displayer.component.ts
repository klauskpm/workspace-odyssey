import {Component, Inject, OnInit} from '@angular/core';
import { environment } from '../../environments/environment';
import { ENVIRONMENT, EnvironmentProvider, EnvironmentHolder } from 'sharer';

@Component({
  selector: 'app-displayer',
  template: `
    <h2>Displayer</h2>
    <p>Provider application environment: {{environment}}</p>
    <p>Injected environment: {{injectedEnvironment.title}}</p>
    <p>Environment provider: {{environmentProvider.injectedEnvironment.title}}</p>
    <p>Environment holder: {{environmentHolder.getEnvironment() | json:2}}</p>
  `
})
export class DisplayerComponent implements OnInit {

  environment: string = environment.title;

  constructor(
    @Inject(ENVIRONMENT) public injectedEnvironment: any,
    public environmentProvider: EnvironmentProvider,
    public environmentHolder: EnvironmentHolder
  ) {}

  ngOnInit() {
  }

}
