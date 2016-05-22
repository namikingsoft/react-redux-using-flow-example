// @flow
import { take, put, call, fork } from "redux-saga/effects"
import { REQUEST_INCREMENT, executeIncrement } from "actions/counter"
import type { IncrementAction } from "types/Counter"

function delay(msec: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, msec))
}

export function* requestIncrement(): Generator<any, void, any> {
  for (;;) {
    const action: ?IncrementAction = yield take(REQUEST_INCREMENT)
    yield call(() => delay(1000))
    yield put(executeIncrement(action ? action.payload.num : 0))
  }
}

export default function* root(): Generator<any, void, void> {
  yield [
    fork(requestIncrement),
  ]
}
