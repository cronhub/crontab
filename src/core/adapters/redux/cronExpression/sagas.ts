import { takeEvery, put, call } from "redux-saga/effects";

import {
  GET_CRON_HUMAN_EXPRESSION,
  getCronHumanExpressionSuccess,
  GetCronHumanExpressionActionType
} from "./actions";
import { GetCronHumanExpression } from "../../../useCases";
import { CronHumanExpression } from "../../../gateways";

export function* CronExpressionSagas() {
  yield takeEvery(
    GET_CRON_HUMAN_EXPRESSION,
    executeGetCronHumanExpressionInteractor
  );
}

function* executeGetCronHumanExpressionInteractor(
  action: GetCronHumanExpressionActionType
) {
  try {
    const { payload } = action;
    const interactor = new GetCronHumanExpression(new CronHumanExpression());
    const humanExpression = yield call([interactor, "execute"], payload);
    yield put(getCronHumanExpressionSuccess(humanExpression));
  } catch (error) {
    console.log(error);
  }
}
