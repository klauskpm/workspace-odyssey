import { Injectable } from '@angular/core';
import { Environmenter } from 'satellite';
import { from, Observable, of, zip } from 'rxjs';
import { map, switchMap, toArray } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EnvironmentsService {
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
          const transformedData$ = this.prepareForExpansionTable(environments.data);
          return zip(title$, transformedData$);
        }),
        map(([title, data]) => ({title, data})),
        toArray()
      );
  }

  private prepareForExpansionTable(environments: any[]) {
    return from(environments)
      .pipe(
        this.removeId(),
        this.extractEnvironment(),
        toArray()
      );
  }

  private removeId() {
    return map((environment: any) => {
        const {id, ...newEnvironment} = environment;
        return newEnvironment;
      });
  }

  private extractEnvironment() {
    return map((environment: any) => this.environmenter.getEnvironment(environment));
  }
}
