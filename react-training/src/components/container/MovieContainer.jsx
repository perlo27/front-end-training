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

  loadData = ({ query, searchBy }, sortBy, sortOrder) => {
    this.setState({ query: query, searchBy: searchBy, sortBy: sortBy, sortOrder: sortOrder}, () => {
      fetch(
        `http://react-cdp-api.herokuapp.com/movies?search=${query}&searchBy=${searchBy}&limit=9&sortBy=${sortBy}&sortOrder=${sortOrder}`
      )
        .then(results => {
          return results.json();
        })
        .then(({ data: movies }) => this.setState({ movies, err: null }))
        .catch(err => {
          message: "Error - something gone wrong", err;
        });
    });
  };

  onSortByReleaseDate = () => {
    this.loadData(this.state, "release_date", this.state.sortOrder === "asc" ? "desc" : "asc");
  };

  render() {
    const { movies, err } = this.state;
    if (err) {
      console.log(err.err);
      return (
        <div>
          <h3>{err.message}</h3>
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
