import React, { Component } from "react";
import Movie from "./Movie";
import MovieResultsHeader from "./MovieResultsHeader";
import { connect } from "react-redux";
import { requestMovies } from "../../actions/index";

class MovieContainer extends Component {
  constructor(props) {
    super(props);
    this.onSortByReleaseDate = this.onSortByReleaseDate.bind(this);
  }

  state = {
    sortBy: "release_date",
    sortOrder: "asc",
  };

  loadData = () => {
    this.props.dispatch(requestMovies());
  };

  onSortByReleaseDate = () => {};

  render() {
    const {movies, err} = this.props;
    if (err) {
      return (
        <div className="no-films-found">
          <h1>{err.message}</h1>
          <button onClick={requestMovies}>Reload...</button>
        </div>
      );
    } else if (movies.length === 0) {
      return (
        <div className="no-films-found">
          <h1>No films found</h1>
        </div>
      );
    }
    return (
      <div>
        <MovieResultsHeader
          recordsNumber={movies.length}
          onSortByReleaseDate={this.onSortByReleaseDate}
        />
        <div className="main">
          <div className="grid-container">
            {movies.map(movie => {
              return (
                <div key={movie.id}>
                  <Movie
                    title={movie.title}
                    releaseDate={new Date(movie.release_date)}
                    genres={movie.genres}
                    posterPath={movie.poster_path}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default connect(({movies, error}) => ({
  movies,
  err: error
}), {requestMovies})(MovieContainer);


