// @flow
import type { IncrementAction, ResetAction } from "types/Counter"

export const REQUEST_INCREMENT = "COUNTER__REQUEST_INCREMENT"
export const EXECUTE_INCREMENT = "COUNTER__EXECUTE_INCREMENT"
export const RESET = "COUNTER__RESET"

export function requestIncrement(num: number): IncrementAction {
  return { type: REQUEST_INCREMENT, payload: { num } }
}

export function executeIncrement(num: number): IncrementAction {
  return { type: EXECUTE_INCREMENT, payload: { num } }
}

export function reset(): ResetAction {
  return { type: RESET }
}
