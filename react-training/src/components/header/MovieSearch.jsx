import React, { Component } from "react";
import PropTypes from "prop-types";

export default class MovieSearch extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  state = {
    value: "",
  };

  handleChange(event) {
    this.setState({value: event.target.value});
    this.props.handleSearchQuery(this.state.value);
  }

  render() {
    return <input className="search-bar" value={this.state.value} type="text" onChange={this.handleChange} />;
  }
}

MovieSearch.propTypes = {
  handleSearchQuery: PropTypes.func
}