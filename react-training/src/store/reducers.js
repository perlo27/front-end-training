import C from "../actions/constants";

export const fetchMovies = (state, action) => {
    return action.type === C.FETCH_RESULTS ? action.payload : state
}