import {
  REQUEST_MOVIES,
  REQUEST_MOVIES_ERROR,
  REQUEST_MOVIES_SUCCESS,
  SET_REQUEST_SELECTOR,
  SET_REQUEST_QUERY
} from "../actions/index";

export default (state, action) => {
  switch (action.type) {
    case SET_REQUEST_QUERY:
      return { ...state, query: action.query};
    case SET_REQUEST_SELECTOR:
      return { ...state, searchBy: action.searchBy };
    case REQUEST_MOVIES:
      return { ...state, error: null };
    case REQUEST_MOVIES_SUCCESS:
      return { ...state, movies: action.payload };
    case REQUEST_MOVIES_ERROR:
      return { ...state, error: action.error };
    default:
      return state;
  }
};
