import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ExampleState } from "./example.reducers";

export namespace ExampleSelectors {
    const state = createFeatureSelector<ExampleState>('example');

    export const data = createSelector(state, (state) => state.data);
}