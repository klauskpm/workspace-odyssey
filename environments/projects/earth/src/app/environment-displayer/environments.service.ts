import { Inject, Injectable } from '@angular/core';
import {
  DIRECT_FOR_ROOT,
  DIRECT_FUNCTION,
  DIRECT_PROVIDER,
  DOUBLE_EXTENDED_FOR_ROOT,
  DOUBLE_EXTENDED_FUNCTION,
  DOUBLE_EXTENDED_PROVIDER,
  Environmenter,
  EXTENDED_FOR_ROOT,
  EXTENDED_FUNCTION,
  EXTENDED_PROVIDER
} from 'satellite';
import { from, Observable, of, zip } from 'rxjs';
import { map, switchMap, toArray } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EnvironmentsService {
  constructor(
    private environmenter: Environmenter,

    @Inject(DIRECT_FOR_ROOT) private directForRoot: any,
    @Inject(EXTENDED_FOR_ROOT) private extendedForRoot: any,
    @Inject(DOUBLE_EXTENDED_FOR_ROOT) private doubleExtendedForRoot: any,

    @Inject(DIRECT_FUNCTION) private directFunction: any,
    @Inject(EXTENDED_FUNCTION) private extendedFunction: any,
    @Inject(DOUBLE_EXTENDED_FUNCTION) private doubleExtendedFunction: any,

    @Inject(DIRECT_PROVIDER) private directProvider: any,
    @Inject(EXTENDED_PROVIDER) private extendedProvider: any,
    @Inject(DOUBLE_EXTENDED_PROVIDER) private doubleExtendedProvider: any,
  ) { }

  getEnvironments() {
    return this.transformEnvironments([
      {
        title: 'For Root',
        data: this.getForRootEnvironments(),
      },
      {
        title: 'Function',
        data: this.getFunctionEnvironments(),
      },
      {
        title: 'Provider',
        data: this.getProviderEnvironments(),
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

  public getForRootEnvironments() {
    return [
      this.directForRoot,
      this.extendedForRoot,
      this.doubleExtendedForRoot,
    ];
  }

  public getFunctionEnvironments() {
    return [
      this.directFunction,
      this.extendedFunction,
      this.doubleExtendedFunction,
    ];
  }

  public getProviderEnvironments() {
    return [
      this.directProvider,
      this.extendedProvider,
      this.doubleExtendedProvider,
    ];
  }
}
