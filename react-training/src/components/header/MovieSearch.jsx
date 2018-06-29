import React, { Component } from "react";

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
  }

  render() {
    return <input className="search-bar" value={this.state.value} type="text" onChange={this.handleChange} />;
  }
}
