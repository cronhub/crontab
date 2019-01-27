import { fork, all } from "redux-saga/effects";

import { CronExpressionSagas } from "../../adapters";

export default function* watch() {
  yield all([fork(CronExpressionSagas)]);
}
