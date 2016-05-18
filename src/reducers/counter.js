// @flow
import { EXECUTE_INCREMENT, RESET } from "actions/counter"
import type { PayloadAction as PAction } from "types/Action"
import type { CounterState, CounterPayload } from "types/Counter"

export const initialState = {
  num: 0,
}

export default function counter(
  state: CounterState = initialState,
  action: PAction<CounterPayload>,
): CounterState {
  switch (action.type) {
    case EXECUTE_INCREMENT: {
      return { ...state, num: state.num + action.payload.num }
    }
    case RESET: {
      return { ...initialState }
    }
    default: {
      return state
    }
  }
}
