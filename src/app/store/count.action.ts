import { Action } from "@ngrx/store";


export enum CountActionTypes  {
  INCREMENT_COUNT = '[COUNT] increment counter'
}

export class IncrementCounterAction implements Action {
   readonly type = CountActionTypes.INCREMENT_COUNT;
}


export type CountAction = IncrementCounterAction;