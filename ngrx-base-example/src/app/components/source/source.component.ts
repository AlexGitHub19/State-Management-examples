import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ExampleActions } from '../../store/example.actions';
import { ExampleSelectors } from '../../store/example.selectors';

@Component({
  selector: 'app-source',
  templateUrl: './source.component.html',
  styleUrls: ['./source.component.scss']
})
export class SourceComponent {
  public readonly count$: Observable<number>

  public inputValue: string | undefined;

  public constructor(private store: Store) {
    this.count$ = store.select(ExampleSelectors.count);
  }

  public increment(): void {
    this.store.dispatch(ExampleActions.increment());
  }
 
  public decrement(): void {
    this.store.dispatch(ExampleActions.decrement());
  }

  public setTitle(): void {
    this.store.dispatch(ExampleActions.setTitle({newTitle: this.inputValue}));
  }

}
