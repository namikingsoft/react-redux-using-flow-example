// @flow
import type { Action, PayloadAction as PAction } from "types/Action"
import type { CounterPayload } from "types/Counter"

export const REQUEST_INCREMENT = "REQUEST_INCREMENT"
export const EXECUTE_INCREMENT = "EXECUTE_INCREMENT"
export const RESET = "RESET"

export function requestIncrement(payload: CounterPayload): PAction<CounterPayload> {
  return { type: REQUEST_INCREMENT, payload }
}

export function executeIncrement(payload: CounterPayload): PAction<CounterPayload> {
  return { type: EXECUTE_INCREMENT, payload }
}

export function reset(): Action {
  return { type: RESET }
}
