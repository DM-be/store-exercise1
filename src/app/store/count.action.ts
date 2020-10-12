import { Action } from "@ngrx/store";


// add new enums
export enum CountActionTypes  {
  INCREMENT_COUNT = '[COUNT] increment DECREMENT_COUNT',
  DECREMENT_COUNT = '[COUNT] decrement count',
  RESET_COUNT = '[COUNT] reset count'
}

export class IncrementCounterAction implements Action {
   readonly type = CountActionTypes.INCREMENT_COUNT;
}

export class DecrementCounterAction implements Action {
  readonly type = CountActionTypes.DECREMENT_COUNT;
}

export class ResetCounterAction implements Action {
  readonly type = CountActionTypes.RESET_COUNT
}

// add more actions to this type
// syntax: IncrementCounterAction | DecrementCounterAction | ...
export type CountAction = IncrementCounterAction | DecrementCounterAction | ResetCounterAction