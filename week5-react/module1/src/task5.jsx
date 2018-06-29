import React from 'react';
import { connect, Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import PropTypes from 'prop-types';
import mocks from './mock';
import actions from './actions';

const {
  handleSearchTextAction,
  searchActiveAction,
  sortAction,
  criteriaAction,
  movieSelectedAction,
} = actions;

const {
  allMovies,
  allCriterias,
  sortParameters,
  selectedMovieAndSimilarMoviesShape,
  movieShape,
} = mocks;

function searchActive(state = false, action) {
  switch (action.type) {
    case 'SEARCH_ACTIVE': {
      return true;
    }
    default: {
      return state;
    }
  }
}

function searchQuery(state = '', action) {
  switch (action.type) {
    case 'SEARCH_QUERY': {
      return action.newValue;
    }
    default: {
      return state;
    }
  }
}

function searchCriteria(state = allCriterias[0], action) {
  switch (action.type) {
    case 'SEARCH_CRITERIA': {
      return action.newValue;
    }
    default: {
      return state;
    }
  }
}

function sortCriteria(state = sortParameters.rate, action) {
  switch (action.type) {
    case 'SORT_BY': {
      return action.newValue;
    }
    default: {
      return state;
    }
  }
}

function selectedMovieAndSimilarMovies(state = null, action) {
  switch (action.type) {
    case 'SELECTED_MOVIE': {
      if (action.newValue) {
        const selectedMovie = allMovies.find(movie => movie.id === action.newValue);
        return {
          selectedMovie,
          similarMovies: allMovies.filter(
            otherMovie => otherMovie.genre === selectedMovie.genre && otherMovie.id !== selectedMovie.id,
          ),
        };
      }
      return null;
    }
    default: {
      return state;
    }
  }
}

const store = createStore(
  combineReducers({
    searchActive,
    searchQuery,
    searchCriteria,
    sortCriteria,
    selectedMovieAndSimilarMovies,
  }),
  {},
);

let Task5 = ({ searchActive, selectedMovieAndSimilarMovies }) => (
  <div key="Task5-div">
    {selectedMovieAndSimilarMovies ? (
      <SelectedMovie key="Task5-SelectedMovie" />
    ) : (
      <div>
        <SearchRow />
        {searchActive && <MovieLinkList key="Task5-MovieLinkList" movieList={allMovies} />}
      </div>
    )}
  </div>
);
const mapStateToPropsTask5 = state => Object.assign({}, state);
Task5 = connect(
  mapStateToPropsTask5,
  null,
)(Task5);
Task5.propTypes = {
  searchActive: PropTypes.bool.isRequired,
  selectedMovieAndSimilarMovies: selectedMovieAndSimilarMoviesShape,
};

let SearchRow = ({ handleSearch, handleSearchText, searchQuery }) => (
  <div>
    <div key="Task5-div-find-your-movie">FIND YOUR MOVIE</div>
    <input
      key="Task5-input-search"
      type="text"
      value={searchQuery}
      onChange={evt => handleSearchText(evt.target.value)}
    />
    <div key="div-search-row" className="searchRow">
      <span>SEARCH BY</span>
      <SearchCriteria />
      <input
        key="Task5-searchRow-input-search"
        type="button"
        value="SEARCH"
        onClick={handleSearch}
      />
    </div>
  </div>
);
const mapStateToPropsSearchRow = state => Object.assign({}, state);
const mapDispatchToPropsSearchRow = dispatch => ({
  handleSearch: () => {
    dispatch(searchActiveAction);
  },
  handleSearchText: (newValue) => {
    dispatch(handleSearchTextAction(newValue));
  },
});
SearchRow = connect(
  mapStateToPropsSearchRow,
  mapDispatchToPropsSearchRow,
)(SearchRow);
SearchRow.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  handleSearchText: PropTypes.func.isRequired,
  searchQuery: PropTypes.string.isRequired,
};

let MovieLink = ({ movie, movieSelected }) => (
  <li key={`MovieLink-${movie.id}`} onClick={() => movieSelected(movie.id)}>
    {movie.title}
  </li>
);
const mapDispatchToPropsMovieLink = dispatch => ({
  movieSelected: (newValue) => {
    dispatch(movieSelectedAction(newValue));
  },
});
MovieLink = connect(
  null,
  mapDispatchToPropsMovieLink,
)(MovieLink);
MovieLink.propTypes = {
  movie: movieShape.isRequired,
  movieSelected: PropTypes.func.isRequired,
};

let MovieLinkList = ({
  searchQuery, searchCriteria, searchActive, movieList, sortCriteria,
}) => (
  <div>
    {movieList.length ? (
      <div>
        <span>{`${movieList.length} Movies Found`}</span>
        <SortMovies />
        {(searchActive
          ? movieList.filter(movie => movie[searchCriteria].startsWith(searchQuery))
          : movieList
        )
          .sort((a, b) => a[sortCriteria] > b[sortCriteria])
          .map(movie => <MovieLink movie={movie} />)}
      </div>
    ) : (
      <span>No Movies Found</span>
    )}
  </div>
);
const mapStateToPropsMovieLinkList = state => Object.assign({}, state);
MovieLinkList = connect(
  mapStateToPropsMovieLinkList,
  null,
)(MovieLinkList);
MovieLinkList.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  searchCriteria: PropTypes.string.isRequired,
  searchActive: PropTypes.bool.isRequired,
  sortCriteria: PropTypes.string.isRequired,
  movieList: PropTypes.arrayOf(movieShape).isRequired,
};

let SearchCriteria = ({ handleCriteria, searchCriteria }) => (
  <div>
    {allCriterias.map((someCriteria) => {
      const className = searchCriteria === someCriteria ? 'selectedButton' : '';
      return (
        <input
          className={className}
          key={`Task5-searchRow-input-${someCriteria}`}
          type="button"
          value={someCriteria.toUpperCase()}
          onClick={() => handleCriteria(someCriteria)}
        />
      );
    })}
  </div>
);
const mapStateToPropsSearchCriteria = state => Object.assign({}, state);
const mapDispatchToPropsSearchCriteria = dispatch => ({
  handleCriteria: (newValue) => {
    dispatch(criteriaAction(newValue));
  },
});
SearchCriteria = connect(
  mapStateToPropsSearchCriteria,
  mapDispatchToPropsSearchCriteria,
)(SearchCriteria);
SearchCriteria.propTypes = {
  handleCriteria: PropTypes.func.isRequired,
  searchCriteria: PropTypes.string.isRequired,
};

let SortMovies = ({ handleSort }) => (
  <div key="Task5-div-search-movie-list-sort">
    <div>
      <span>Sort By</span>
      <input type="button" value="release date" onClick={() => handleSort(sortParameters.date)} />
      <input type="button" value="rating" onClick={() => handleSort(sortParameters.rate)} />
    </div>
  </div>
);
const mapStateToPropsSortMovies = state => Object.assign({}, state);
const mapDispatchToPropsSortMovies = dispatch => ({
  handleSort: (newValue) => {
    dispatch(sortAction(newValue));
  },
});
SortMovies = connect(
  mapStateToPropsSortMovies,
  mapDispatchToPropsSortMovies,
)(SortMovies);
SortMovies.propTypes = {
  handleSort: PropTypes.func.isRequired,
};

let SelectedMovie = ({
  selectedMovieAndSimilarMovies: { selectedMovie, similarMovies },
  backToSearch,
}) => (
  <div>
    <input
      type="button"
      value="Search"
      key="SelectedMovie-input-backToSearch"
      onClick={backToSearch}
    />
    <div key="SelectedMovie-div-movieTitle">{selectedMovie.title}</div>
    <span key="SelectedMovie-div-filmsBy">{`Films by genre ${selectedMovie.genre}`}</span>
    <MovieLinkList movieList={similarMovies} />
  </div>
);
const mapStateToPropsSelectedMovie = state => Object.assign({}, state);
const mapDispatchToPropsSelectedMovie = dispatch => ({
  backToSearch: () => {
    dispatch(movieSelectedAction(null));
  },
});
SelectedMovie = connect(
  mapStateToPropsSelectedMovie,
  mapDispatchToPropsSelectedMovie,
)(SelectedMovie);
SelectedMovie.propTypes = {
  selectedMovieAndSimilarMovies: selectedMovieAndSimilarMoviesShape.isRequired,
  backToSearch: PropTypes.func.isRequired,
};

export default () => (
  <Provider store={store}>
    <Task5 key="Task5" />
  </Provider>
);
