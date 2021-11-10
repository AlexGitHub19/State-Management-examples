import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { DataService, IData } from '../data.service';
import { ExampleActions } from './example.actions';

export interface ExampleStateModel {
  data?: IData;
}

@State<ExampleStateModel>({
  name: 'example',
  defaults: {
    data: undefined,
  },
})
@Injectable()
export class ExampleState {
  public constructor(private readonly dataService: DataService) {}

  @Selector() public static getData(
    state: ExampleStateModel
  ): IData | undefined {
    return state.data;
  }

  @Action(ExampleActions.LoadData)
  public async loadData(
    ctx: StateContext<ExampleStateModel>
  ) {
    var loadedData = await this.dataService.getData().toPromise();

    ctx.patchState({ data: loadedData });
  }

  @Action(ExampleActions.SetData)
  public async setData(
    ctx: StateContext<ExampleStateModel>,
    action: ExampleActions.SetData
  ) {
    ctx.patchState({ data: action.data });
  }
}
