import {put, call} from 'redux-saga/effects'
import { successfulResponseMovies, errorResponse, requestMovies } from '../actions';

export function* fetchData(apiFunction, params) {
    const apiResponse = yield call(apiFunction, params);
    if (apiResponse) {
        const {err, response} = apiResponse;
        if (response) {
            yield put(successfulResponseMovies(response));
        } else if(err) {
            yield put(errorResponse(err));
        }
    }
}