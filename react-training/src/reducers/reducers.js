import {
  REQUEST_MOVIES,
  RESPONSE_MOVIES,
  REQUEST_MOVIES_ERROR
} from "../actions/index";

export default (state, action) => {
  switch (action.type) {
    case REQUEST_MOVIES:
      console.log("Reducer is now working");
      return { ...state, query: action.query, searchBy: action.searchBy };
    case RESPONSE_MOVIES:
      return { ...state, movies: action.payload };
    case REQUEST_MOVIES_ERROR:
      return { ...state, error: action.error };
    default:
      return state;
  }
};
