import React, { Component } from "react";
import SearchByPanel from "./SearchByPanel";

export default class MovieSearchPanel extends Component {
  render() {
    return (
      <div className="search-panel-wrapper">
        <ul>
          <li>
            <h4>search by</h4>
          </li>
          <SearchByPanel/>
          <li>
            <button onClick={this.handleClick} className="search">search</button>
          </li>
        </ul>
      </div>
    );
  }
}
