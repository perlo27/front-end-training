// TODO: define actions which will be performed in this application
// MOVIE_SEARCH
// ADD_ERROR
// CLEAR_ERROR
// FETCH_RESULTS
// CANCEL_FETCHING
/*
    1. Define actions and export them as a constants
    2. Define states which will be impacted by actions
*/

export const SET_REQUEST_PARAMS = "SET_REQUEST_PARAMS";
export const REQUEST_MOVIES = "REQUEST_MOVIES";
export const REQUEST_MOVIES_SUCCESS = "REQUEST_MOVIES_SUCCESS";
export const REQUEST_MOVIES_ERROR = "REQUEST_MOVIES_ERROR";


export const setRequestParams = ({ query, searchBy }) => {
  return {
    type: SET_REQUEST_PARAMS,
    query,
    searchBy,
  };
};

export const requestMovies = () => {
  return {
    type: REQUEST_MOVIES
  }
}

export const successfulResponseMovies = (movies) => {
  return {
    type: REQUEST_MOVIES_SUCCESS,
    payload: movies,
  };
};

export const errorResponse = (error) => {
  return {
    type: REQUEST_MOVIES_ERROR,
    error
  }
}


