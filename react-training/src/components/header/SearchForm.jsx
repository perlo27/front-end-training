import React from "react";
import MovieSearch from "./MovieSearch";
import MovieSearchPanel from "./MovieSearchPanel";
import fetchMovies from "../../store/reducers";
import C from "../../actions/constants";

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
    const action = {
      type: C.FETCH_RESULTS,
      payload: {
        query: this.state.query,
        searchBy: this.state.searchBy
      }
    }
    fetchMovies()
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
