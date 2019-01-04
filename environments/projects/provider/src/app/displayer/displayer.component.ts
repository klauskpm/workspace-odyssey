import { Component, Inject } from '@angular/core';
import { environment } from '../../environments/environment';
import { ENVIRONMENT, EnvironmentHolder, EnvironmentProvider } from 'sharer';
import { CallerService } from '../../../../receiver/src/app/caller.service';

@Component({
  selector: 'app-displayer',
  template: `
    <h2>Strategies</h2>
    <app-environment-displayer [environments]="strategies"></app-environment-displayer>
  `
})
export class DisplayerComponent {

  public environment: any = {
    ...environment,
    label: 'Provider component'
  };

  public strategies = [
    this.environment,
    this.caller.get(),
    this.injectedEnvironment,
    this.environmentProvider.get(),
    this.environmentHolder.get()
  ];

  constructor(
    public caller: CallerService,
    @Inject(ENVIRONMENT) public injectedEnvironment: any,
    public environmentProvider: EnvironmentProvider,
    public environmentHolder: EnvironmentHolder
  ) {}

}
