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

MovieFooter.propTypes = {
  title: PropTypes.string,
  releaseDate: PropTypes.instanceOf(Date)
};
