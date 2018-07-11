import { take } from "redux-saga/effects";
import { REQUEST_MOVIES, requestMovies } from "../actions";
import { callApi } from "../config/apiClient";
import { fetchData } from "./utils";

export function* fetchMovies() {
    while(true) {
        const params = yield take(REQUEST_MOVIES);
        yield fetchData(requestMovies, callApi, params);
    }
}