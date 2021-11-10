import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

export interface IData {
  name: string;
  age: number;
}

@Injectable({ providedIn: 'any' })
export class DataService {
  public getData(): Observable<IData> {
    return of({ name: 'some name', age: 38 }).pipe(delay(1500));
  }
}
