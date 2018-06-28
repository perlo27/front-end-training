import React from "react";

export const MovieAvatar = (props) => {
  return <img className="movie-poster" src={props.posterPath} />;
};

// refactored

// export const MovieAvatar = ({posterPath}) => <img className="movie-poster" src={posterPath} />;
