// @flow
import { fork } from "redux-saga/effects"
import counter from "sagas/counter"

export default function* root(): any {
  yield [
    fork(counter),
  ]
}
