import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers/reducers";
import createSagaMiddleware from "redux-saga";
import { fetchMovies } from "../sagas/movies";
import { createLogger } from "redux-logger";

const __PROD__ = process.env.NODE_ENV === "production";
const sagaMiddleware = createSagaMiddleware();

let composeEnhancers = compose;
if (!__PROD__ && window.__REDUX_DEVTOOLS_EXTENSION__) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
}

const logger = createLogger({
  level: "log",
  logger: console
});

const initialState = {
  query: "",
  searchBy: "title",
  movies: []
};

export default createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(sagaMiddleware, logger))
);

sagaMiddleware.run(fetchMovies);
