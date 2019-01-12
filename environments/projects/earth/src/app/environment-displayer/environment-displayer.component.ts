import { Component, OnInit } from '@angular/core';
import { EnvironmentId } from 'satellite';
import { from, Observable, of, zip } from 'rxjs';
import { map, switchMap, toArray } from 'rxjs/operators';
import { Environmenter } from 'satellite';

@Component({
  selector: 'app-environment-displayer',
  template: `
    <div *ngFor="let environment of environmentsList$ | async">
      <h2>{{environment.title}}</h2>
      <mat-chip-list>
        <mat-chip
          *ngFor="let data of environment.data"
          [color]="data.color"
          [selected]="data.selected"
        >{{data.label}}: {{data.title}}</mat-chip>
      </mat-chip-list>
    </div>
  `,
  styles: []
})
export class EnvironmentDisplayerComponent implements OnInit {
  public environmentsList$: Observable<Array<any>>;
  private environmentColors = {
    [EnvironmentId.Development]: 'primary',
    [EnvironmentId.Production]: 'accent'
  };

  constructor(
    private environmenter: Environmenter
  ) { }

  ngOnInit() {
    this.environmentsList$ = this.transformEnvironments([
      {
        title: 'For Root',
        data: this.environmenter.getForRootEnvironments(),
      },
      {
        title: 'Function',
        data: this.environmenter.getFunctionEnvironments(),
      },
      {
        title: 'Provider',
        data: this.environmenter.getProviderEnvironments(),
      }
    ]);
  }

  private transformEnvironments(environmentsList: Array<any>): Observable<Array<any>> {
    return from(environmentsList)
      .pipe(
        switchMap((environments: any) => {
          const title$ = of(environments.title);
          const dataWithMatChipProperties$ = this.addMatChipProperties(environments.data);
          return zip(title$, dataWithMatChipProperties$);
        }),
        map(([title, data]) => ({title, data})),
        toArray()
      );
  }

  private addMatChipProperties(environments: Array<any>): Observable<Array<any>> {
    return from(environments)
      .pipe(
        this.addSelected(),
        this.addColor(),
        toArray()
      );
  }

  private addSelected() {
    return map((environment: any) => ({
      ...environment,
      selected: typeof environment.id !== 'undefined'
    }));
  }

  private addColor() {
    return map((environment: any) => ({
      ...environment,
      color: this.environmentColors[environment.id]
    }));
  }
}
