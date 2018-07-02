import React from "react";
import MovieSearch from "./MovieSearch";
import MovieSearchPanel from "./MovieSearchPanel";

export default class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSearchQuery = this.handleSearchQuery.bind(this);
    this.handleSearchOptions = this.handleSearchOptions.bind(this);
  }

  state = {
    query: "",
    searchBy: "title"
  };

  handleClick(event) {
    event.preventDefault();
    this.handleSubmit();
  }

  handleSubmit() {
    this.props.handleSubmit(this.state);
  }

  handleSearchQuery(query) {
    this.setState({ query: query });
  }

  handleSearchOptions(searchBy) {
    this.setState({ searchBy: searchBy });
  }

  render() {
    return (
      <form onSubmit={this.handleClick}>
        <MovieSearch handleSearchQuery={this.handleSearchQuery} />
        <MovieSearchPanel handleSearchOptions={this.handleSearchOptions} />
      </form>
    );
  }
}
