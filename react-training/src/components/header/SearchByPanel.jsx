import React, { Component } from "react";
import SearchByButton from "./SearchByButton";

export default class SearchByPanel extends Component {
  constructor(props) {
    super(props);
    this.handleTitle = this.handleTitle.bind(this);
    this.handleGenres = this.handleGenres.bind(this);
  }

  state = {
    selector: "title",
    genres: "",
    title: "active"
  };

  handleTitle(e) {
    e.preventDefault();
    this.state.title === "active"
      ? this.setState({ selector: "title", title: "", genres: "active" })
      : this.setState({ selector: "title", title: "active", genres: "" });
    this.props.handleSearchBy(this.state.selector);
  }

  handleGenres(e) {
    e.preventDefault();
    this.state.genres === "active"
      ? this.setState({ selector: "genres", genres: "", title: "active" })
      : this.setState({ selector: "genres", genres: "active", title: "" });
    this.props.handleSearchBy(this.state.selector);
  }

  render() {
    return (
      <React.Fragment>
        <li>
          <SearchByButton
            selector="title"
            onClick={this.handleTitle}
            active={this.state.title}
          />
        </li>
        <li>
          <SearchByButton
            selector="genres"
            onClick={this.handleGenres}
            active={this.state.genres}
          />
        </li>
      </React.Fragment>
    );
  }
}
