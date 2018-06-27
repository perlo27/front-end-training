import React from 'react';

class Task3 extends React.Component {
  constructor(props) {
    super(props);
    this.allMovies = [
      {
        title: 'abc',
        id: 1,
        date: '2018-06-25',
        rate: 3,
        genre: 'drama',
      },
      {
        title: 'cde',
        id: 2,
        date: '2018-06-24',
        rate: 4,
        genre: 'action',
      },
      {
        title: 'fgh',
        id: 3,
        date: '2018-06-26',
        rate: 2,
        genre: 'drama',
      },
    ];
    this.allCriterias = ['genre', 'title'];
    this.state = {
      searchActive: false,
      searchQuery: '',
      searchMovieList: [],
      searchCriteria: this.allCriterias[0],
    };
    this.sortParameters = {
      rate: 'rate',
      date: 'date',
    };
  }

  handleSearch = () => {
    this.setState({
      searchActive: true,
    });
  }

  handleSearchText = (event) => {
    let newQuery = null;
    if (event) {
      ({ value: newQuery } = event.target);
    } else {
      ({ searchQuery: newQuery } = this.state);
    }
    const { searchCriteria: criteria } = this.state;
    const filteredMovieList = this.allMovies.filter(
      movie => movie[criteria].startsWith(newQuery),
    );
    this.setState({
      searchQuery: newQuery,
      searchMovieList: filteredMovieList,
    });
  }

  handleSort = (sortField) => {
    const { searchMovieList: currentList } = this.state;
    this.setState({
      searchMovieList: currentList.sort(
        (a, b) => a[sortField] > b[sortField],
      ),
    });
  }

  handleCriteria = (criteria) => {
    this.setState({
      searchCriteria: criteria,
    });
  }

  resetSearch = () => {
    this.setState({
      selectedMovie: null,
      similarMovies: [],
    });
  }

  movieSelected = (movieId) => {
    const selectedMovie = this.allMovies.find(movie => movie.id === movieId);
    const similarMovies = this.allMovies.filter(otherMovie => otherMovie.genre
      === selectedMovie.genre && otherMovie.id !== selectedMovie.id);
    this.setState({
      selectedMovie,
      similarMovies,
    });
  }

  componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({ hasError: true });
    // You can also log the error to an error reporting service
    console.log(error, info);
  }

  render() {
    console.log('Rendering page');
    return (
      <div key="Task3-div">
        {
          this.state.selectedMovie
            ? (
              <SelectedMovie
                key="Task3-SelectedMovie"
                similarMovieSelected={this.movieSelected}
                backToSearch={this.resetSearch}
                movie={this.state.selectedMovie}
                similarMovies={this.state.similarMovies}
              />
            )
            : (
              <div>
                <div
                  key="Task3-div-find-your-movie"
                >
                  FIND YOUR MOVIE
                </div>
                <input
                  key="Task3-input-search"
                  type="text"
                  value={this.state.searchQuery}
                  onChange={this.handleSearchText}
                />
                <div key="div-search-row" className="searchRow">
                  <span>
                    SEARCH BY
                  </span>
                  {
                    this.allCriterias.map((someCriteria) => {
                      const className = (this.state.searchCriteria === someCriteria)
                        ? 'selectedButton'
                        : '';
                      return (
                        <input
                          className={className}
                          key={`Task3-searchRow-input-${someCriteria}`}
                          type="button"
                          value={someCriteria.toUpperCase()}
                          onClick={() => this.handleCriteria(someCriteria)}
                        />
                      );
                    })
                  }
                  <input
                    key="Task3-searchRow-input-search"
                    type="button"
                    value="SEARCH"
                    onClick={this.handleSearch}
                  />
                </div>
                {
                  this.state.searchActive
                  && (
                  <div>
                    {
                      this.state.searchMovieList.length
                        ? (
                          <div key="Task3-div-search-movie-list">
                            <div key="Task3-div-search-movie-list-sort">
                              <span>
                                {this.state.searchMovieList.length}
                                Movies Found
                              </span>
                              <div>
                                <span>
                                  Sort By
                                </span>
                                <input
                                  type="button"
                                  value="release date"
                                  onClick={() => this.handleSort(this.sortParameters.date)}
                                />
                                <input
                                  type="button"
                                  value="rating"
                                  onClick={() => this.handleSort(this.sortParameters.rate)}
                                />
                              </div>
                            </div>
                            <SearchResults
                              key="Task3-SearchResults"
                              movieSelected={this.movieSelected}
                              searchMovieList={this.state.searchMovieList}
                            />
                          </div>
                        )
                        : (
                          <div>
                            No results found
                          </div>
                        )
                    }
                  </div>
                  )
                }
              </div>
            )
        }
      </div>
    );
  }
}

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.sortParameters = {
      rate: 'rate',
      date: 'date',
    };
  }


  render() {
    console.log('Rendering search results');
    return (
      <div>
        <ul>
          {
            this.props.searchMovieList.map(result =>
              (
                <li
                  key={`SearchResults-li-${result.id}`}
                  onClick={() => this.props.movieSelected(result.id)}
                >
                  {result.title}
                </li>
              ))
          }
        </ul>
      </div>);
  }
}

const SelectedMovie = (props) => {
  const { movie } = props;
  const { similarMovies } = props;

  return (
    <div>
      <input
        type="button"
        value="Search"
        key="SelectedMovie-input-backToSearch"
        onClick={props.backToSearch}
      />
      <div key="SelectedMovie-div-movieTitle">
        {movie.title}
      </div>
      <span key="SelectedMovie-div-filmsBy">
        Films by genre
        {movie.genre}
      </span>
      <div key="SelectedMovie-div-similarMovies">
        <ul>
          {
            similarMovies.map(
              similarMovie => (
                <li key={`SelectedMovie-div-similarMovies-li-${similarMovie.id}`}
                  onClick={
                    () => props.similarMovieSelected(similarMovie.id)
                  }
                >
                  {similarMovie.title}
                </li>
              )
            )
          }
        </ul>
      </div>
    </div>);
}

export default function task3() {
  return <Task3 key="Task3" />;
}
