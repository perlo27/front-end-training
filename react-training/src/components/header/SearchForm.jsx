import React from "react";
import MovieSearch from "./MovieSearch";
import MovieSearchPanel from "./MovieSearchPanel";
import { setRequestParams } from "../../actions";
import { connect } from "react-redux";

class SearchForm extends React.Component {
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
  }

  handleSearchOptions(searchBy) {
    this.setState({ searchBy: searchBy });
  }

  handleChange(e) {
    this.setState({query : e.target.value});
    this.props.dispatch(setRequestParams(this.state));
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

export default connect()(SearchForm);