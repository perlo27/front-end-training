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

export const REQUEST_MOVIES = "REQUEST_MOVIES";
export const RESPONSE_MOVIES = "RESPONSE_MOVIES";
export const REQUEST_MOVIES_ERROR = "REQUEST_MOVIES_ERROR";


export const requestMovies = ({ query, searchBy }) => {
  console.log("Action is starting ");
  return {
    type: REQUEST_MOVIES,
    query,
    searchBy,
  };
};

export const successfulResponseMovies = (movies) => {
  return {
    type: RESPONSE_MOVIES,
    payload: movies,
  };
};

export const errorResponse = (error) => {
  return {
    type: REQUEST_MOVIES_ERROR,
    error
  }
}


