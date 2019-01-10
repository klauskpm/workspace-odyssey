import { Component, Inject } from '@angular/core';
import { environment } from '../../environments/environment';
import { ENVIRONMENT, EnvironmentHolder, EnvironmentProvider, Environmenter } from 'strategies';
import { CallerService } from '../../../../secondary/src/app/caller.service';

@Component({
  selector: 'app-displayer',
  styles: [`
    .basic-container {
      padding: 30px;
    }
  `],
  template: `
    <section class="basic-container">
      <h2 class="mat-title">Strategies</h2>
      <app-environment-displayer [environments]="strategies"></app-environment-displayer>
      <h2>FOR ROOT</h2>
      <app-environment-displayer [environments]="environmenter.getForRootEnvironments()"></app-environment-displayer>
      <h2>FUNCTION</h2>
      <app-environment-displayer [environments]="environmenter.getFunctionEnvironments()"></app-environment-displayer>
      <h2>PROVIDER</h2>
      <app-environment-displayer [environments]="environmenter.getProviderEnvironments()"></app-environment-displayer>
    </section>
  `
})
export class DisplayerComponent {

  public environment: any = {
    ...environment,
    label: 'Main component'
  };

  public strategies = [
    this.environment,
    this.caller.get(),
    this.injectedEnvironment,
    this.environmentProvider.get(),
    this.environmentHolder.get(),
    this.environmenter.environment
  ];

  constructor(
    public caller: CallerService,
    @Inject(ENVIRONMENT) public injectedEnvironment: any,
    public environmentProvider: EnvironmentProvider,
    public environmentHolder: EnvironmentHolder,
    public environmenter: Environmenter
  ) {}

}
