import { takeEvery, put, call } from "redux-saga/effects";

import {
  GET_HUMAN_READABLE_DESCRIPTION,
  getHumanReadableDescriptionSuccess,
  GetHumanReadableDescriptionActionType
} from "./actions";
import { GetHumanReadableDescription } from "../../../useCases";
import { CronHumanDescription } from "../../../gateways";

export function* CronExpressionSagas() {
  yield takeEvery(
    GET_HUMAN_READABLE_DESCRIPTION,
    executeGetHumanReadableDescriptionInteractor
  );
}

function* executeGetHumanReadableDescriptionInteractor(
  action: GetHumanReadableDescriptionActionType
) {
  try {
    const { payload } = action;
    const interactor = new GetHumanReadableDescription(
      new CronHumanDescription()
    );
    const humanExpression = yield call([interactor, "execute"], payload);
    yield put(getHumanReadableDescriptionSuccess(humanExpression));
  } catch (error) {
    console.log(error);
  }
}
