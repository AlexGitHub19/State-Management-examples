import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ExampleSelectors } from '../../store/example.selectors';

@Component({
  selector: 'app-consumer2',
  templateUrl: './consumer2.component.html',
  styleUrls: ['./consumer2.component.scss'],
})
export class Consumer2Component {
  public readonly count$: Observable<number>;

  public readonly title$: Observable<string | undefined>;

  public constructor(store: Store) {
    this.count$ = store.select(ExampleSelectors.count);

    this.title$ = store.select(ExampleSelectors.title);
  }
}
