import { Action, createReducer, on } from '@ngrx/store';
import { ExampleActions } from './example.actions';

export interface ExampleState {
  count: number;
  title?: string;
}

const initialState: ExampleState = {
  count: 3,
  title: 'default title',
};

const _exampleReducer = createReducer(
  initialState,
  on(ExampleActions.increment, (state) => {
    return {
      ...state,
      count: state.count + 1,
    };
  }),
  on(ExampleActions.decrement, (state) => {
    return {
      count: state.count - 1,
      title: state.title
    };
  }),
  on(ExampleActions.setTitle, (state, payload) => {
    return {
      count: state.count,
      title: payload.newTitle,
    };
  })
);

export function exampleReducer(state: ExampleState | undefined, action: Action) {
  return _exampleReducer(state, action);
}
