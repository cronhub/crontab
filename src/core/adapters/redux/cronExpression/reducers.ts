import { combineReducers } from "redux";
import {
  GET_CRON_HUMAN_EXPRESSION_SUCCESS,
  GetCronHumanExpressionSuccessActionType
} from "./actions";

const humanExpression = (
  state: string = "",
  action: GetCronHumanExpressionSuccessActionType
) => {
  switch (action.type) {
    case GET_CRON_HUMAN_EXPRESSION_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

export const CronExpressionReducers = combineReducers({
  humanExpression
});
