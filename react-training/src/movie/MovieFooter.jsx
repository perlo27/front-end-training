import React, { Component } from "react";

export default class MovieFooter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="movie-footer">
            <h2>{this.props.title}</h2>
            <span>{this.props.releaseDate}</span>
            <h3>{this.props.genres}</h3>
        </div>
    );
  }
}
