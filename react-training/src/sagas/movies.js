import { select, take } from "redux-saga/effects";
import { callApi } from "../config/apiClient";
import { fetchData } from "./utils";
import { REQUEST_MOVIES } from "../actions";

export function* fetchMovies() {
  while (true) {
    yield take(REQUEST_MOVIES);
    const params = yield select();
    yield fetchData(callApi, params);
  }
}
