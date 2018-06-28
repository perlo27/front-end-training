import React, { Component } from "react";

export default class MovieSearchPanel extends Component {
  render() {
    return (
      <div className="search-panel-wrapper">
        <ul>
          <li>
            <h4>search by</h4>
          </li>
          <li>
            <button className="search-by search-by-title">title</button>
          </li>
          <li>
            <button className="search-by search-by-genre">genre</button>
          </li>
          <li>
            <button className="search">search</button>
          </li>
        </ul>
      </div>
    );
  }
}
