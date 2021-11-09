import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ExampleState } from "./example.reducers";

export namespace ExampleSelectors {
    const state = createFeatureSelector<ExampleState>('example');

    export const count = createSelector(state, (state) => state.count);

    export const title = createSelector(state, (state) => state.title);
}