import React, { Component } from "react";
import Movie from "./Movie";
import MovieResultsHeader from "./MovieResultsHeader";

export default class MovieContainer extends Component {
  state = {
    movies: [],
    err: null
  };

  componentDidMount() {
    this.loadData();
  }

  loadData = () => {
    fetch("http://react-cdp-api.herokuapp.com/movies?search=quentin&limit=9")
    .then(results => {
      return results.json();
    })
    .then(({data: movies}) => this.setState({ movies, err: null }))
    .catch(err => {
      message: 'Error - something gone wrong',
      err
    })
  }

  render() {
    const {movies, err} = this.state;
    if (err) {
      console.log(err.err);
      return (
        <div>
          <h3>{err.message}</h3>
          <button onClick={this.loadData}>Reload...</button>
        </div>
      )
    }
    return (
      <div className="main">
        <MovieResultsHeader recordsNumber={movies.length} />
        <div className="grid-container">
        {
          movies.map(movie => {
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
          })
        } 
        </div>
      </div>
    );
  }
}
