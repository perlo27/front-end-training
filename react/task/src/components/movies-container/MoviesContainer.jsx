import React, { Component } from 'react';
import Movie from './Movie';
import './movies-container.css'

export default class MoviesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      err: null
    }

    this.loadData = this.loadData.bind(this);
  }

  componentDidMount() {
    this.loadData();
  }


  // loadData = () => {
  //   fetch("http://react-cdp-api.herokuapp.com/movies?search=quentin&limit=9")
  //     .then(results => {
  //       return results.json();
  //     })
  //     .then(({ data: movies }) => this.setState({ movies }));
  // }

  loadData() {
    fetch("http://react-cdp-api.herokuapp.com/movies?search=polanski&limit=9")
      .then(results => {
        return results.json();
      })
      .then(({ data: movies }) => this.setState({ movies }));
  }

render() {
  const { movies } = this.state;
  return (
    <div className="movies-container">
      <ul>
        {this.state.movies.map(movie => {
          return (
          <li>
            <Movie
              imagePath={movie.poster_path}
              title={movie.title}
              genres={movie.genres}
              releaseDate={movie.release_date} />
          </li>);
        })}


      </ul>
    </div>
  )
}
}
