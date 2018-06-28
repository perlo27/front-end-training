import React from 'react';
import {
  Route, Switch, Link, BrowserRouter,
} from 'react-router-dom';
import { allMovies, allCriterias, sortParameters } from './mock';

class Task6 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchActive: false,
      searchQuery: '',
      searchMovieList: [],
      searchCriteria: allCriterias[0],
    };
  }

  handleSearch = () => {
    this.setState({
      searchActive: true,
    });
  };

  handleSearchText = (event) => {
    let newQuery = null;
    if (event) {
      ({ value: newQuery } = event.target);
    } else {
      ({ searchQuery: newQuery } = this.state);
    }
    const { searchCriteria: criteria } = this.state;
    const filteredMovieList = allMovies.filter(movie => movie[criteria].startsWith(newQuery));
    this.setState({
      searchQuery: newQuery,
      searchMovieList: filteredMovieList,
    });
  };

  handleSort = (sortField) => {
    const { searchMovieList } = this.state;
    this.setState({
      searchMovieList: searchMovieList.sort((a, b) => a[sortField] > b[sortField]),
    });
  };

  handleCriteria = (criteria) => {
    this.setState({
      searchCriteria: criteria,
    });
  };

  componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({ hasError: true });
    // You can also log the error to an error reporting service
    console.log(error, info);
  }

  render() {
    console.log('Rendering page');
    const {
      searchQuery, searchCriteria, searchActive, searchMovieList,
    } = this.state;
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <div key="Route-path-/">
              <div key="Task6-div-find-your-movie">
                <span>FIND YOUR MOVIE</span>
              </div>
              <input
                key="Task6-input-search"
                type="text"
                value={searchQuery}
                onChange={this.handleSearchText}
              />
              <div key="div-search-row" className="searchRow">
                <span>SEARCH BY</span>
                {allCriterias.map((someCriteria) => {
                  const className = searchCriteria === someCriteria ? 'selectedButton' : '';
                  return (
                    <input
                      className={className}
                      key={`Task6-searchRow-input-${someCriteria}`}
                      type="button"
                      value={someCriteria.toUpperCase()}
                      onClick={() => this.handleCriteria(someCriteria)}
                    />
                  );
                })}
                <input
                  key="Task6-searchRow-input-search"
                  type="button"
                  value="SEARCH"
                  onClick={this.handleSearch}
                />
              </div>
              {searchActive && (
                <div>
                  {searchMovieList.length ? (
                    <div key="Task6-div-search-movie-list">
                      <div key="Task6-div-search-movie-list-sort">
                        <span>{`${searchMovieList.length} Movies Found`}</span>
                        <div>
                          <span>Sort By</span>
                          <input
                            type="button"
                            value="release date"
                            onClick={() => this.handleSort(sortParameters.date)}
                          />
                          <input
                            type="button"
                            value="rating"
                            onClick={() => this.handleSort(sortParameters.rate)}
                          />
                        </div>
                      </div>
                      <SearchResults key="Task6-SearchResults" searchMovieList={searchMovieList} />
                    </div>
                  ) : (
                    <div>No results found</div>
                  )}
                </div>
              )}
            </div>
          )}
        />
        <Route
          path="/selectedMovie/:movieId"
          render={(props) => {
            const movieId = Number(props.match.params.movieId);
            const selectedMovie = allMovies.find(movie => movie.id === movieId);
            const similarMovies = allMovies.filter(
              otherMovie => otherMovie.genre === selectedMovie.genre && otherMovie.id !== movieId,
            );

            return (
              <SelectedMovie
                key="Task6-SelectedMovie"
                movie={selectedMovie}
                similarMovies={similarMovies}
              />
            );
          }}
        />
      </Switch>
    );
  }
}

const SearchResults = ({ searchMovieList }) => {
  console.log('Rendering search results');
  return (
    <div>
      <ul>
        {searchMovieList.map(result => (
          <li key={`SearchResults-li-${result.id}`}>
            <Link to={`./selectedMovie/${result.id}`}>{result.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const SelectedMovie = ({ movie, similarMovies }) => (
  <div>
    <Link to="/">Search</Link>
    <div key="SelectedMovie-div-movieTitle">{movie.title}</div>
    <span key="SelectedMovie-div-filmsBy">{`Films by genre ${movie.genre}`}</span>
    <div key="SelectedMovie-div-similarMovies">
      <ul>
        {similarMovies.map(similarMovie => (
          <li key={`SelectedMovie-div-similarMovies-li-${similarMovie.id}`}>
            <Link to={`/selectedMovie/${similarMovie.id}`}>{similarMovie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default function task6() {
  return (
    <BrowserRouter>
      <Task6 key="Task6" />
    </BrowserRouter>
  );
}
