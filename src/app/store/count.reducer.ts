import { CountActionTypes } from "./count.action";
import { CountAction } from "./count.action";
import { initialCountState } from "./count.state";
import { CountState } from "./count.state";

export function CountReducer(
  state: CountState = initialCountState,
  action: CountAction
): CountState {
  switch (action.type) {
    case CountActionTypes.INCREMENT_COUNT:
      let count = state.count;
      count++;
      return {
        count
      };
    default:
      return state;
  }
}
