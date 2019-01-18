import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Environmenter } from 'ng-environmenter';
import { EnvironmentProviderService } from '../../../../moon/src/app/environment-provider.service';

@Component({
  selector: 'app-environment-displayer',
  template: `
    <mat-accordion [multi]="true">
      <mat-expansion-panel *ngFor="let environment of environmentsList$ | async">
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
    rowHeight: '200px',
    colSpan: 1,
    rowSpan: 1
  };

  constructor(
    private environmenter: Environmenter,
    private environmentProvider: EnvironmentProviderService
  ) {}

  ngOnInit() {
    this.environmentsList$ = of([
      this.getEnvironment(),
      this.environmentProvider.getEnvironment()
    ]);
  }

  getEnvironment() {
    return {
      title: 'Earth',
      data: [
        this.environmenter.getApplicationEnvironment(),
        this.environmenter.getGlobalEnvironment(),
        this.environmenter.getEnvironment(),
      ]
    };
  }
}
