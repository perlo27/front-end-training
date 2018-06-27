import React, { Component } from "react";

export default class MovieFooter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="movie-footer">
        <h2>{this.props.title}</h2>
        <span>{new Date(this.props.releaseDate).getFullYear()}</span>
        <ul className="movie-footer-genres">
          {this.props.genres.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
      </div>
    );
  }
}
