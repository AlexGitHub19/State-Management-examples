import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IData } from '../../data.service';
import { ExampleActions } from '../../store/example.actions';
import { ExampleSelectors } from '../../store/example.selectors';

@Component({
  selector: 'app-source',
  templateUrl: './source.component.html',
  styleUrls: ['./source.component.scss']
})
export class SourceComponent implements OnInit {
  data$: Observable<IData | undefined>;

  public constructor(private store: Store) {
    this.data$ = store.select(ExampleSelectors.data)
  }

  public ngOnInit(): void {
    this.store.dispatch(ExampleActions.loadData());
  }
}
