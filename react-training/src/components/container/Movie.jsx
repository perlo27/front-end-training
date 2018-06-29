import React, { Component } from "react";
import { MovieAvatar } from "./MovieAvatar";
import { MovieFooter } from "./MovieFooter";

export default ({ posterPath, title, releaseDate, genres }) => {
  return (
    <div className="movie grid-item">
      <MovieAvatar posterPath={posterPath} />
      <MovieFooter
        title={title}
        releaseDate={releaseDate}
        genres={genres}
      />
    </div>
  );
};
