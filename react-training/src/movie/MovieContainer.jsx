import React, { Component } from "react";
import Movie from "./Movie";
import MovieResultsHeader from "./MovieResultsHeader";

export default class MovieContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      results_number: 0
    };
  }

  componentDidMount() {
    fetch("http://react-cdp-api.herokuapp.com/movies?search=quentin&limit=9")
      .then(results => {
        return results.json();
      })
      .then(res => {
        this.setState({ results_number: res.data.length });
        let movies = res.data.map(movie => {
          return (
            <div key={movie.id}>
              <Movie
                title={movie.title}
                releaseDate={movie.release_date}
                genres={movie.genres}
                posterPath={movie.poster_path}
              />
            </div>
          );
        });
        this.setState({ movies: movies });
      });
  }

  render() {
    return (
      <div className="main">
        <MovieResultsHeader recordsNumber={this.state.results_number} />
        <div className="grid-container">{this.state.movies}</div>
      </div>
    );
  }
}
