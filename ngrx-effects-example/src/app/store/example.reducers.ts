import { Action, createReducer, on } from '@ngrx/store';
import { IData } from '../data.service';
import { ExampleActions } from './example.actions';

export interface ExampleState {
  data?: IData;
}

const initialState: ExampleState = {
  data: undefined
};

const _exampleReducer = createReducer(
  initialState,
  on(ExampleActions.setData, (state, payload) => {
    return {
      data: payload,
    };
  })
);

export function exampleReducer(state: ExampleState | undefined, action: Action) {
  return _exampleReducer(state, action);
}
