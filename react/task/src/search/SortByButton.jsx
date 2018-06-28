import React, { Component } from 'react'

export default class SortByButton extends Component {
  render() {
    return (
      <div>
        {this.props.sortBy}
      </div>
    )
  }
}
