import React, { Component } from "react";
import Movie from "./Movie";

export default class MovieContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
  }

  componentDidMount() {
    fetch("http://react-cdp-api.herokuapp.com/movies")
      .then(results => {
        return results.json();
      })
      .then(res => {
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
    return <div>{this.state.movies}</div>;
  }
}
