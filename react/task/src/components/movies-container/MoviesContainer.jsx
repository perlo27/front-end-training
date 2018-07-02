import React, { Component } from 'react';
import Movie from './Movie';
import './movies-container.css'

export default class MoviesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      query: "http://react-cdp-api.herokuapp.com/movies?search=wajda",
      err: null
    }

    this.loadData = this.loadData.bind(this);
  }

  componentDidMount() {
    console.log(this.state.query);
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
    fetch(this.state.query)
      .then(results => {
        return results.json();
      })
      .then(({ data: movies }) => this.setState({ movies }));
  }

  render() {
    const { movies } = this.state;
    return (
      <div className="movies-container">
        {this.state.movies.map(movie => {
          return (
            <div>
              <Movie
                imagePath={movie.poster_path}
                title={movie.title}
                genres={movie.genres}
                releaseDate={movie.release_date} />
            </div>);
        })}


      </div>
    )
  }
}
