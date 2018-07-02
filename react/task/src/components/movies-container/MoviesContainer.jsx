import React, { Component } from 'react';
import Movie from './Movie';
import './movies-container.css'

export default class MoviesContainer extends Component {
  render() {
    return (
      <div className="movies-container">
        <ul>
          <li>
            <Movie 
            imagePath="+"
            title="Kill Bill"
            genres="Thriller"
            releaseDate="21.07.1994" />
          </li>
        </ul>
      </div>
    )
  }
}
