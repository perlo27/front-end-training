import React, { Component } from 'react'

export default class Welcome extends Component {
  render() {
    return (
      <div>
          <h2>Hello, {this.props.name}</h2>
      </div>
    )
  }
}
