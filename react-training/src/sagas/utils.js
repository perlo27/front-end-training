export function* fetchData(action, params, apiFunction) {
    yield put(action.request(params));

    const apiResponse = yield call(apiFunction, params);
    if (apiResponse) {
        const {err, response} = apiResponse;
        if (response) {
            yield put(action.success(response, params));
        } else if(err) {
            yield put(action.error(err));
        }
    }
}