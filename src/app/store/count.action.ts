import { Action } from "@ngrx/store";


// add new enums
export enum CountActionTypes  {
  INCREMENT_COUNT = '[COUNT] increment counter'
}

export class IncrementCounterAction implements Action {
   readonly type = CountActionTypes.INCREMENT_COUNT;
}

// add more actions to this type
// syntax: IncrementCounterAction | DecrementCounterAction | ...
export type CountAction = IncrementCounterAction; // |