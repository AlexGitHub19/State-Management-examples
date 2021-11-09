import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ExampleSelectors } from 'src/app/store/example.selectors';

@Component({
  selector: 'app-consumer1',
  templateUrl: './consumer1.component.html',
  styleUrls: ['./consumer1.component.scss'],
})
export class Consumer1Component {
  public readonly count$: Observable<number>;

  public readonly title$: Observable<string | undefined>;

  public constructor(store: Store) {
    this.count$ = store.select(ExampleSelectors.count);

    this.title$ = store.select(ExampleSelectors.title);
  }
}
