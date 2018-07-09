import { REQUEST_MOVIES, RESPONSE_MOVIES, REQUEST_MOVIES_ERROR } from "../actions/index";
import { combineReducers } from "redux";

const fetchMovies = (state, action) => {
  switch (action.type) {
    case REQUEST_MOVIES:
      return { ...state, query: action.query, searchBy: action.searchBy };
    case RESPONSE_MOVIES:
      return { ...state, movies: action.payload };
    default:
      return state;
  }
}

export const rootReducer = combineReducers(fetchMovies);


// const initialState = {
//   query: "",
//   searchBy: "title",
//   movies: []
// };