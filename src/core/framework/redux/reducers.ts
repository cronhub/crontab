import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { reducer as formReducer } from "redux-form";
import { History } from "history";

export default (history: History) =>
  combineReducers({
    form: formReducer,
    router: connectRouter(history)
  });
