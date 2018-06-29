import React, { Component } from "react";
import SearchByButton from "./SearchByButton";

export default class SearchByPanel extends Component {
  constructor(props) {
    super(props);
    this.handleTitle = this.handleTitle.bind(this);
    this.handleGenre = this.handleGenre.bind(this);
  }

  state = {
    selector: "title",
    genre: "",
    title: "active"
  };

  handleTitle(e) {
    e.preventDefault();
    this.state.title === "active"
      ? this.setState({ selector: "title", title: "", genre: "active" })
      : this.setState({ selector: "title", title: "active", genre: "" });
  }

  handleGenre(e) {
    e.preventDefault();
    this.state.genre === "active"
      ? this.setState({ selector: "genre", genre: "", title: "active" })
      : this.setState({ selector: "genre", genre: "active", title: "" });
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
            selector="genre"
            onClick={this.handleGenre}
            active={this.state.genre}
          />
        </li>
      </React.Fragment>
    );
  }
}
