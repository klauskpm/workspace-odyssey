import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EnvironmentsService } from './environments.service';

@Component({
  selector: 'app-environment-displayer',
  template: `
    <mat-accordion [multi]="true">
      <mat-expansion-panel
        *ngFor="let environment of environmentsList$ | async"
        [expanded]="true"
      >
        <mat-expansion-panel-header>
          <mat-panel-title>
            {{ environment.title }}
          </mat-panel-title>
        </mat-expansion-panel-header>

        <div *ngFor="let data of environment.data">
          <pre>{{ data | json }}</pre>
        </div>
      </mat-expansion-panel>
    </mat-accordion>
  `,
  styles: []
})
export class EnvironmentDisplayerComponent implements OnInit {
  public environmentsList$: Observable<Array<any>>;

  constructor(
    private environmentsService: EnvironmentsService
  ) {}

  ngOnInit() {
    this.environmentsList$ = this.environmentsService.getEnvironments();
  }
}
