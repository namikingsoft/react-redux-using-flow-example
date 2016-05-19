// @flow
import type { Action, PayloadAction as PAction } from "types/Action"
import type { CounterPayload } from "types/Counter"

export const REQUEST_INCREMENT = "COUNTER__REQUEST_INCREMENT"
export const EXECUTE_INCREMENT = "COUNTER__EXECUTE_INCREMENT"
export const RESET = "COUNTER__RESET"

export function requestIncrement(payload: CounterPayload): PAction<CounterPayload> {
  return { type: REQUEST_INCREMENT, payload }
}

export function executeIncrement(payload: CounterPayload): PAction<CounterPayload> {
  return { type: EXECUTE_INCREMENT, payload }
}

export function reset(): Action {
  return { type: RESET }
}
