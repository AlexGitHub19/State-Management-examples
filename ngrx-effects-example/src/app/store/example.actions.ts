import { createAction, props } from '@ngrx/store';
import { IData } from '../data.service';

export namespace ExampleActions {
  export const loadData = createAction('[Example] LoadData');

  export const setData = createAction(
    '[Example] SetData',
    props<IData>()
  );
}
