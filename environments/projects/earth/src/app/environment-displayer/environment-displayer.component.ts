import { Component, OnInit } from '@angular/core';
import { EnvironmentId } from 'strategies';
import { from, Observable } from 'rxjs';
import { map, switchMap, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-environment-displayer',
  template: `
    <mat-chip-list *ngFor="let environments of environmentsList$ | async">
      <mat-chip
        *ngFor="let environment of environments"
        [color]="environment.color"
        [selected]="environment.selected"
      >{{environment.label}}: {{environment.title}}</mat-chip>
    </mat-chip-list>
  `,
  styles: []
})
export class EnvironmentDisplayerComponent implements OnInit {
  public environmentsList$: Observable<Array<Array<any>>>;
  private environmentColors = {
    [EnvironmentId.Development]: 'primary',
    [EnvironmentId.Production]: 'accent'
  };

  constructor() { }

  ngOnInit() {
  }

  private transformEnvironments(environmentsList: Array<Array<any>>): Observable<Array<Array<any>>> {
    return from(environmentsList)
      .pipe(
        switchMap((environments: Array<any>) => this.addMatChipProperties(environments)),
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
