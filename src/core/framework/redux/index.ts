import { createBrowserHistory } from "history";
import { createStore, compose, applyMiddleware } from "redux";
import { routerMiddleware } from "connected-react-router";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";

import sagas from "./sagas";
import reducers from "./reducers";

export const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  const history = createBrowserHistory();
  const store = createStore(
    reducers(history),
    composeWithDevTools(
      compose(
        applyMiddleware(sagaMiddleware),
        applyMiddleware(routerMiddleware(history))
      )
    )
  );

  sagaMiddleware.run(sagas);

  return { store, history };
};
