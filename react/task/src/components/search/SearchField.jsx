import React, { Component } from 'react';
import PropTypes from 'prop-types'

export default class SearchField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }
  

  handleChange(event) {
    this.setState({ value: event.target.value }, () => this.props.handleSearchQuery(this.state.value));
  }
  render() {
    return (
      <div className="search-field">
        <input type="text" value={this.state.value} onChange={this.handleChange}></input>
      </div>
    );
  }
}

SearchField.propTypes = {
  handleSearchQuery: PropTypes.func
}