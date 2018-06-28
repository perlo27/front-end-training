import React, { Component } from "react";
import { MovieAvatar } from "./MovieAvatar";
import MovieFooter from "./MovieFooter";

export default class Movie extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="movie grid-item">
        <MovieAvatar posterPath={this.props.posterPath} />
        <MovieFooter
          title={this.props.title}
          releaseDate={this.props.releaseDate}
          genres={this.props.genres}
        />
      </div>
    );
  }
}


// refactored

// export default ({posterPath, title, releaseDate, genres}) => (
//   <div className="movie grid-item">
//     <MovieAvatar posterPath={posterPath} />
//     <MovieFooter
//       title={title}
//       releaseDate={releaseDate}
//       genres={genres}
//     />
//   </div>
// );