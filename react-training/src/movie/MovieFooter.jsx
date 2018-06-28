import React, { Component } from "react";

export default class MovieFooter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="movie-footer">
        <div className="movie-info">
          <h2 className="movie-title">{this.props.title}</h2>
          <div className="movie-year-wrapper">
            <div className="movie-year">
              {new Date(this.props.releaseDate).getFullYear()}
            </div>
          </div>
          <div className="movie-genres">
            <ul className="movie-footer-genres">
              {this.props.genres.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
