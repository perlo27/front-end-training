import React from "react";
import MovieSearch from "./MovieSearch";
import MovieSearchPanel from "./MovieSearchPanel";
import { requestMovies } from "../../actions";

export default class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleSearchOptions = this.handleSearchOptions.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  state = {
    query: "",
    searchBy: "title"
  };

  handleClick(event) {
    event.preventDefault();
    requestMovies(this.state);
  }

  handleSearchOptions(searchBy) {
    this.setState({ searchBy: searchBy });
  }

  handleChange(e) {
    this.setState({query : e.target.value});
  }

  render() {
    return (
      <form onSubmit={this.handleClick}>
        <MovieSearch handleChange={this.handleChange}/>
        <MovieSearchPanel handleSearchOptions={this.handleSearchOptions} />
      </form>
    );
  }
}
