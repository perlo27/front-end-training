import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers/reducers";
import createSagaMiddleware from "redux-saga";

const __PROD__ = process.env.NODE_ENV === 'production';
let composeEnhancers = compose;
if (!__PROD__ && window.__REDUX_DEVTOOLS_EXTENSION__) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
}

const sagaMiddleware = createSagaMiddleware();
const initialState = {
  query: "",
  searchBy: "title",
  movies: []
};

export default function createStoreWithInitialState() {
  console.log("Creating store");
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(sagaMiddleware))
  );
};

