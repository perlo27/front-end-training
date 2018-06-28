import React, { Component } from "react";

export default class MovieResultsHeader extends Component {

  render() {
    return (
        <div className="">
            <h3>{this.props.recordsNumber} movies founds</h3>
            <span>
                <h2>Sort by</h2>
                <span>release date</span>
                <span>rating</span>
            </span>
        </div>
    )
  }
}
