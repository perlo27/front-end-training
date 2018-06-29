import React, { Component } from "react";

export default ({recordsNumber}) => {
    return (
      <div className="movies-header">
        <h3 className="movies-header-results">
          {recordsNumber} movies founds
        </h3>
        <h2>Sort by</h2>
        <button>release date</button>
        <button>rating</button>
      </div>
    );
}
