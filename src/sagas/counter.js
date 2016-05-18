// @flow
import { take, put, call, fork } from "redux-saga/effects"
import { REQUEST_INCREMENT, actions } from "actions/counter"
import type { PayloadAction as PAction } from "types/Action"
import type { CounterPayload } from "types/Counter"

function delay(msec: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, msec))
}

export function* requestIncrement(): Generator<any, void, any> {
  for (;;) {
    const action: ?PAction<CounterPayload> = yield take(REQUEST_INCREMENT)
    yield call(() => delay(1000))
    yield put(actions.executeIncrement(action ? action.payload : { num: 0 }))
  }
}

export default function* root(): Generator<any, void, void> {
  yield [
    fork(requestIncrement),
  ]
}
