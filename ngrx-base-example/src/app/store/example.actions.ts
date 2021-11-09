import { createAction, props } from '@ngrx/store';

export interface SetTitleActionData {
  newTitle?: string 
}

export namespace ExampleActions {
  export const increment = createAction('[Example] Increment');
  export const decrement = createAction('[Example] Decrement');

  export const setTitle = createAction(
    '[Example] SetTitle',
    props<SetTitleActionData>()
  );
}
