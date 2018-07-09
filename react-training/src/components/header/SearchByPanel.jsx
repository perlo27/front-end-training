import React, { Component } from "react";
import SearchByTile from "./SearchByTile";

export default class SearchByPanel extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  state = {
    selector: "title",
    genres: "",
    title: "active"
  };

  handleClick() {
    this.state.title === "active"
      ? this.setState({ selector: "genre", title: "", genres: "active" })
      : this.setState({ selector: "title", title: "active", genres: "" });
    this.props.handleSearchBy(this.state.selector);
  }

  render() {
    return (
      <React.Fragment>
        <li>
          <SearchByTile
            selector="title"
            onClick={this.handleClick}
            active={this.state.title}
          />
        </li>
        <li>
          <SearchByTile
            selector="genres"
            onClick={this.handleClick}
            active={this.state.genres}
          />
        </li>
      </React.Fragment>
    );
  }
}
