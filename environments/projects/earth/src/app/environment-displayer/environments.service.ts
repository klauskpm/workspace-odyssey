import { Injectable } from '@angular/core';
import { Environmenter, EnvironmentId } from 'satellite';
import { from, Observable, of, zip } from 'rxjs';
import { map, switchMap, toArray } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EnvironmentsService {
  private environmentColors = {
    [EnvironmentId.Development]: 'primary',
    [EnvironmentId.Production]: 'accent'
  };

  constructor(
    private environmenter: Environmenter
  ) { }

  getEnvironments() {
    return this.transformEnvironments([
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
