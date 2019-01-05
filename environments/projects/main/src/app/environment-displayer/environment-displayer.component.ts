import { Component, Input, OnInit } from '@angular/core';
import { EnvironmentId } from 'strategies';
import { from, Observable } from 'rxjs';
import { map, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-environment-displayer',
  template: `
    <mat-chip-list>
      <mat-chip
        *ngFor="let displayedEnvironment of displayedEnvironments | async"
        [color]="displayedEnvironment.color"
        [selected]="displayedEnvironment.selected"
      >{{displayedEnvironment.label}}: {{displayedEnvironment.title}}</mat-chip>
    </mat-chip-list>
  `,
})
export class EnvironmentDisplayerComponent implements OnInit {
  @Input() environments: any[] = [];
  private environmentColors = {
    [EnvironmentId.Development]: 'primary',
    [EnvironmentId.Production]: 'accent'
  };
  public displayedEnvironments: Observable<any[]>;

  ngOnInit(): void {
    this.displayedEnvironments = from(this.environments)
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
