import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EnvironmentsService } from './environments.service';

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
        >{{data | json}}</mat-chip>
      </mat-chip-list>
    </div>
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
