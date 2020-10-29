import { CountActionTypes } from "./count.action";
import { CountAction } from "./count.action";
import { initialCountState } from "./count.state";
import { CountState } from "./count.state";

// implement the decrement CountAction and reset action
export function CountReducer(
  state: CountState = initialCountState,
  action: CountAction
): CountState {
  switch (action.type) {
    case CountActionTypes.INCREMENT_COUNT: {
      let count = state.count;
      count++;
      return {
        count // shorthand for count: count
      };
    }
    case CountActionTypes.DECREMENT_COUNT: {
      let count = state.count;
      count--;
      return {
        count
      };
    }
    default:
      return state;
  }
}
