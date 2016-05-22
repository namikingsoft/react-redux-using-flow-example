// @flow
import { EXECUTE_INCREMENT, RESET } from "actions/counter"
import type { CounterState, CounterAction } from "types/Counter"

export const initialState: CounterState = { num: 0 }

export default function counter(
  state: CounterState = initialState,
  action: CounterAction,
): CounterState {
  switch (action.type) {
    case EXECUTE_INCREMENT: {
      return { num: state.num + action.payload.num }
    }
    case RESET: {
      return { ...initialState }
    }
    default: {
      return state
    }
  }
}
