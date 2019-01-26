import { combineReducers } from "redux";
import {
  GET_HUMAN_READABLE_DESCRIPTION_SUCCESS,
  GetHumanReadableDescriptionSuccessActionType
} from "./actions";

const humanExpression = (
  state: string = "",
  action: GetHumanReadableDescriptionSuccessActionType
) => {
  switch (action.type) {
    case GET_HUMAN_READABLE_DESCRIPTION_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

export const CronDescriptionReducers = combineReducers({
  humanExpression
});
