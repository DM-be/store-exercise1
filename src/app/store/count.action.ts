import { Action } from "@ngrx/store";


// add new enums
export enum CountActionTypes  {
  INCREMENT_COUNT = '[COUNT] increment counter',
  DECREMENT_COUNT = '[COUNT] decrement counter'
}

export class IncrementCounterAction implements Action {
   readonly type = CountActionTypes.INCREMENT_COUNT;
}

export class DecrementCounterAction implements Action {
  readonly type = CountActionTypes.DECREMENT_COUNT;
}

// add more actions to this type
// syntax: IncrementCounterAction | DecrementCounterAction | ...
export type CountAction = IncrementCounterAction | DecrementCounterAction