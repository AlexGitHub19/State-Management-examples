import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { IData } from '../../data.service';
import { ExampleActions } from '../../store/example.actions';
import { ExampleState } from '../../store/example.state';

@Component({
  selector: 'app-source',
  templateUrl: './source.component.html',
  styleUrls: ['./source.component.scss'],
})
export class SourceComponent implements OnInit {
  data$: Observable<IData | undefined>;

  public constructor(private store: Store) {
    this.data$ = this.store.select(ExampleState.getData);
  }

  public ngOnInit(): void {
    this.store.dispatch(new ExampleActions.LoadData());
  }

  public setState(): void {
    this.store.dispatch(
      new ExampleActions.SetData({ name: 'custom name', age: 89 })
    );
  }
}
