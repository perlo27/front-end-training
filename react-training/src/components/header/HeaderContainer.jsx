import React, { Component } from "react";
import SearchForm from "./SearchForm";

export default class HeaderContainer extends Component {
  render() {
    return (
      <div className="header-parent">
        <div className="header-background" />
        <div className="header-content">
          <h2 className="header-title">netflixroulette</h2>
          <h2 className="header-search">find your movie</h2>
          <SearchForm handleSubmit={this.props.handleSubmit} />
        </div>
      </div>
    );
  }
}
