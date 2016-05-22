// @flow
import type { Action, PayloadAction } from "types/Action"

export interface CounterState {
  num: number;
}

export interface IncrementPayload {
  num: number;
}

export interface IncrementAction extends PayloadAction<IncrementPayload> {}
export interface ResetAction extends Action {}
export type CounterAction = IncrementAction & ResetAction
