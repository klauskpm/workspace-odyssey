import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CallerService {

  constructor() { }

  get() {
    return {
      ...environment,
      label: 'Secondary service'
    };
  }
}