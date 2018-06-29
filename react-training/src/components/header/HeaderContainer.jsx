import React from "react";
import MovieSearch from "./MovieSearch";
import MovieSearchPanel from "./MovieSearchPanel";
import SearchForm from "./SearchForm";

export default () => {
  return (
    <div className="header-parent">
      <div className="header-background" />
      <div className="header-content">
        <h2 className="header-title">netflixroulette</h2>
        <h2 className="header-search">find your movie</h2>
        <SearchForm/>
      </div>
    </div>
  );
};
