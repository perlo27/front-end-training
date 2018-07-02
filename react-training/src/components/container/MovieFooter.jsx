import React from "react";
import PropTypes from "prop-types";

export const MovieFooter = ({ title, releaseDate, genres }) => {
  return (
    <div className="movie-footer">
      <div className="movie-info">
        <h2 className="movie-title">{title}</h2>
        <div className="movie-year-wrapper">
          <div className="movie-year">{releaseDate.getFullYear()}</div>
        </div>
        <div className="movie-genres">
          <ul className="movie-footer-genres">
            {genres.map((item, index) => <li key={index}>{item}</li>)}
          </ul>
        </div>
      </div>
    </div>
  );
};

MovieFooter.defaultProps = {
  title: "Title",
  releaseDate: "01-01-2018",
  genres: ["Drama"]
}

MovieFooter.propTypes = {
  title: PropTypes.string.isRequired,
  releaseDate: PropTypes.instanceOf(Date).isRequired
};
