import React, { Component } from "react";

export default class MovieSearch extends Component {
  state = {
    searchText: ""
  };

  render() {
    return <input className="search-bar" type="text" />;
  }
}
