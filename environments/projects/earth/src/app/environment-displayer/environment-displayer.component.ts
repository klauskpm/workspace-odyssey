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

        <mat-grid-list
          [cols]="gridConfiguration.cols"
          [rowHeight]="gridConfiguration.rowHeight"
        >
          <mat-grid-tile
            class="my-grid"
            *ngFor="let data of environment.data;"
            [colspan]="gridConfiguration.colSpan"
            [rowspan]="gridConfiguration.rowSpan"
          >
            <pre>{{ data | json }}</pre>
          </mat-grid-tile>
        </mat-grid-list>
      </mat-expansion-panel>
    </mat-accordion>
  `,
  styles: [
    `
      .my-grid {
        background-color: #616161;
      }
    `
  ]
})
export class EnvironmentDisplayerComponent implements OnInit {
  public environmentsList$: Observable<Array<any>>;
  public gridConfiguration = {
    cols: 3,
    rowHeight: '140px',
    colSpan: 1,
    rowSpan: 1
  };

  constructor(
    private environmentsService: EnvironmentsService
  ) {}

  ngOnInit() {
    this.environmentsList$ = this.environmentsService.getEnvironments();
  }
}
