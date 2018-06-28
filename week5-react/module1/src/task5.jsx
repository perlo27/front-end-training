import React from 'react';
import { connect, Provider } from 'react-redux';
import { createStore } from 'redux';
import { allMovies, allCriterias, sortParameters } from './mock';
import {
  handleSearchTextAction,
  searchActiveAction,
  sortAction,
  criteriaAction,
  movieSelectedAction,
  similarMoviesAction,
  filteredMoviesAction,
} from './actions';

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

function selectedMovie(state = null, action) {
  switch (action.type) {
    case 'SELECTED_MOVIE': {
      if (action.newValue) {
        return allMovies.find(movie => movie.id === action.newValue);
      }
      return null;
    }
    default: {
      return state;
    }
  }
}

function similarMovies({ similar, movie }, action) {
  switch (action.type) {
    case 'SIMILAR_MOVIES': {
      const { genre, id } = movie;
      return allMovies.filter(otherMovie => otherMovie.genre === genre && otherMovie.id !== id);
    }
    default: {
      return similar;
    }
  }
}

function filteredMovies(
  {
    filteredMovies, searchActive, searchCriteria, searchQuery, sortCriteria,
  },
  action,
) {
  switch (action.type) {
    case 'FILTERED_MOVIES': {
      if (searchActive) {
        return allMovies
          .filter(movie => movie[searchCriteria].startsWith(searchQuery))
          .sort((a, b) => a[sortCriteria] > b[sortCriteria]);
      }
      return allMovies;
    }
    default: {
      return filteredMovies;
    }
  }
}

function combinedReducer(state = {}, action) {
  return {
    searchActive: searchActive(state.searchActive, action),
    searchQuery: searchQuery(state.searchQuery, action),
    searchCriteria: searchCriteria(state.searchCriteria, action),
    sortCriteria: sortCriteria(state.sortCriteria, action),
    filteredMovies: filteredMovies(state, action),
    selectedMovie: selectedMovie(state.selectedMovie, action),
    similarMovies: similarMovies(
      { similar: state.similarMovies, movie: state.selectedMovie },
      action,
    ),
  };
}
const store = createStore(combinedReducer, {});

let Task5 = ({
  searchQuery,
  searchCriteria,
  searchActive,
  selectedMovie,
  sortCriteria,
  similarMovies,
  filteredMovies,
  handleSearchText,
  handleSearch,
  handleSort,
  handleCriteria,
  movieSelected,
  backToSearch,
}) => (
  <div key="Task5-div">
    {selectedMovie ? (
      <SelectedMovie
        key="Task5-SelectedMovie"
        similarMovieSelected={movieSelected}
        backToSearch={backToSearch}
        movie={selectedMovie}
        similarMovies={similarMovies}
      />
    ) : (
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
          <input
            key="Task5-searchRow-input-search"
            type="button"
            value="SEARCH"
            onClick={handleSearch}
          />
        </div>
        {searchActive && (
          <div>
            {filteredMovies.length ? (
              <div key="Task5-div-search-movie-list">
                <div key="Task5-div-search-movie-list-sort">
                  <span>
                    {filteredMovies.length}
                    Movies Found
                  </span>
                  <div>
                    <span>Sort By</span>
                    <input
                      type="button"
                      value="release date"
                      onClick={() => handleSort(sortParameters.date)}
                    />
                    <input
                      type="button"
                      value="rating"
                      onClick={() => handleSort(sortParameters.rate)}
                    />
                  </div>
                </div>
                <SearchResults
                  key="Task5-SearchResults"
                  movieSelected={movieSelected}
                  searchMovieList={filteredMovies}
                />
              </div>
            ) : (
              <div>No results found</div>
            )}
          </div>
        )}
      </div>
    )}
  </div>
);

const mapStateToProps = (state) => {
  console.log('qweqweqweqwe', state);
  return {
    searchQuery: state.searchQuery,
    searchCriteria: state.searchCriteria,
    searchActive: state.searchActive,
    selectedMovie: state.selectedMovie,
    sortCriteria: state.sortCriteria,
    similarMovies: state.similarMovies,
    filteredMovies: state.filteredMovies,
  };
};
const mapDispatchToProps = dispatch => ({
  handleSearchText: (newValue) => {
    dispatch(handleSearchTextAction(newValue));
    dispatch(filteredMoviesAction);
  },
  handleSearch: () => {
    dispatch(searchActiveAction);
    dispatch(filteredMoviesAction);
  },
  handleSort: (newValue) => {
    dispatch(sortAction(newValue));
    dispatch(filteredMoviesAction);
  },
  handleCriteria: (newValue) => {
    dispatch(criteriaAction(newValue));
    dispatch(filteredMoviesAction);
  },
  movieSelected: (newValue) => {
    dispatch(movieSelectedAction(newValue));
    dispatch(similarMoviesAction);
  },
  backToSearch: () => {
    dispatch(movieSelectedAction(null));
    dispatch(similarMoviesAction);
  },
});
Task5 = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Task5);

const SearchResults = ({ movieSelected, searchMovieList }) => {
  console.log('Rendering search results');
  return (
    <div>
      <ul>
        {searchMovieList.map(result => (
          <li key={`SearchResults-li-${result.id}`} onClick={() => movieSelected(result.id)}>
            {result.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

const SelectedMovie = ({
  movie,
  similarMovies: similarMoviesToThis,
  backToSearch,
  similarMovieSelected,
}) => (
  <div>
    <input
      type="button"
      value="Search"
      key="SelectedMovie-input-backToSearch"
      onClick={backToSearch}
    />
    <div key="SelectedMovie-div-movieTitle">{movie.title}</div>
    <span key="SelectedMovie-div-filmsBy">
      Films by genre
      {movie.genre}
    </span>
    <div key="SelectedMovie-div-similarMovies">
      <ul>
        {similarMoviesToThis.map(similarMovie => (
          <li
            key={`SelectedMovie-div-similarMovies-li-${similarMovie.id}`}
            onClick={() => similarMovieSelected(similarMovie.id)}
          >
            {similarMovie.title}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default () => (
  <Provider store={store}>
    <Task5 key="Task5" />
  </Provider>
);
