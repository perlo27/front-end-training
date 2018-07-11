import React, { Component } from "react";
import Movie from "./Movie";
import MovieResultsHeader from "./MovieResultsHeader";

export default class MovieContainer extends Component {
  constructor(props) {
    super(props);
    this.onSortByReleaseDate = this.onSortByReleaseDate.bind(this);
  }

  state = {
    movies: [],
    sortBy: "release_date",
    sortOrder: "asc",
    err: null
  };

  loadData = () => {
  
  };

  onSortByReleaseDate = () => {
    this.loadData(
      this.state,
      "release_date",
      this.state.sortOrder === "asc" ? "desc" : "asc"
    );
  };

  render() {
    const { movies, loading, err } = this.state;
    if (loading) {
      return (
        <div className="no-films-found">
          <h1>Loading...</h1>
        </div>
      );
    } else if (err) {
      return (
        <div className="no-films-found">
          <h1>{err.message}</h1>
          <button onClick={this.loadData}>Reload...</button>
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
