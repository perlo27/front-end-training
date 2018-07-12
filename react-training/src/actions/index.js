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

export const SET_REQUEST_QUERY = "SET_REQUEST_QUERY";
export const SET_REQUEST_SELECTOR = "SET_REQUEST_SELECTOR";
export const REQUEST_MOVIES = "REQUEST_MOVIES";
export const REQUEST_MOVIES_SUCCESS = "REQUEST_MOVIES_SUCCESS";
export const REQUEST_MOVIES_ERROR = "REQUEST_MOVIES_ERROR";


export const setRequestQuery = ({ query }) => {
  return {
    type: SET_REQUEST_QUERY,
    query
  };
};

export const setRequestSelector = ({ searchBy }) => {
  return {
    type: SET_REQUEST_SELECTOR,
    searchBy
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


