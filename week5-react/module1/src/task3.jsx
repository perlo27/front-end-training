import React from 'react';
import { allMovies, allCriterias, sortParameters } from './mock';

class Task3 extends React.Component {
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
    const { searchMovieList: currentList } = this.state;
    this.setState({
      searchMovieList: currentList.sort((a, b) => a[sortField] > b[sortField]),
    });
  };

  handleCriteria = (criteria) => {
    this.setState({
      searchCriteria: criteria,
    });
  };

  resetSearch = () => {
    this.setState({
      selectedMovie: null,
      similarMovies: [],
    });
  };

  movieSelected = (movieId) => {
    const selectedMovie = allMovies.find(movie => movie.id === movieId);
    const similarMovies = allMovies.filter(
      otherMovie => otherMovie.genre === selectedMovie.genre && otherMovie.id !== selectedMovie.id,
    );
    this.setState({
      selectedMovie,
      similarMovies,
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
      searchQuery,
      searchCriteria,
      searchActive,
      searchMovieList,
      selectedMovie,
      similarMovies,
    } = this.state;
    return (
      <div key="Task3-div">
        {selectedMovie ? (
          <SelectedMovie
            key="Task3-SelectedMovie"
            similarMovieSelected={this.movieSelected}
            backToSearch={this.resetSearch}
            movie={selectedMovie}
            similarMovies={similarMovies}
          />
        ) : (
          <div>
            <div key="Task3-div-find-your-movie">FIND YOUR MOVIE</div>
            <input
              key="Task3-input-search"
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
                    key={`Task3-searchRow-input-${someCriteria}`}
                    type="button"
                    value={someCriteria.toUpperCase()}
                    onClick={() => this.handleCriteria(someCriteria)}
                  />
                );
              })}
              <input
                key="Task3-searchRow-input-search"
                type="button"
                value="SEARCH"
                onClick={this.handleSearch}
              />
            </div>
            {searchActive && (
              <div>
                {searchMovieList.length ? (
                  <div key="Task3-div-search-movie-list">
                    <div key="Task3-div-search-movie-list-sort">
                      <span>
                        {searchMovieList.length}
                        Movies Found
                      </span>
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
                    <SearchResults
                      key="Task3-SearchResults"
                      movieSelected={this.movieSelected}
                      searchMovieList={searchMovieList}
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
  }
}

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
  movie, similarMovies, backToSearch, similarMovieSelected,
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
        {similarMovies.map(similarMovie => (
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

export default function task3() {
  return <Task3 key="Task3" />;
}
