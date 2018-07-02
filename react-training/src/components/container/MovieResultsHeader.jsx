import React from "react";

export default ({recordsNumber, onSortByReleaseDate}) => {
    return (
      <div className="movies-header">
        <h3 className="movies-header-results">
          {recordsNumber} movies founds
        </h3>
        <h2>Sort by</h2>
        <button onClick={onSortByReleaseDate}>release date</button>
        <button>rating</button>
      </div>
    );
}
