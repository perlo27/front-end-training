import React, { Component } from "react";
import SearchByPanel from "./SearchByPanel";

export default ({handleSearchOptions}) => {
    return (
      <div className="search-panel-wrapper">
        <ul>
          <li>
            <h4>search by</h4>
          </li>
          <SearchByPanel handleSearchBy={handleSearchOptions}/>
          <li>
            <input type="submit" className="search" value="SEARCH"/>
          </li>
        </ul>
      </div>
    );
}
