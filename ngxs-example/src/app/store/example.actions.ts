import { IData } from '../data.service';

export namespace ExampleActions {
  export class LoadData {
    public static readonly type = '[Example] LoadData';
  }

  export class SetData {
    public static readonly type = '[Example] SetData';
    public constructor(public data: IData | undefined) {}
  }
}
