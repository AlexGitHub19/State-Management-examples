import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap } from "rxjs/operators";
import { DataService } from "../data.service";
import { ExampleActions } from "./example.actions";

@Injectable()
export class ExampleEffects {
 
  loadData$ = createEffect(() => this.actions$.pipe(
    ofType(ExampleActions.loadData),
    mergeMap(() => this.dataService.getData()
      .pipe(
        map(data => { return ExampleActions.setData(data)}),
      ))
    )
  );
 
  constructor(
    private actions$: Actions,
    private dataService: DataService
  ) {
    
  }
}