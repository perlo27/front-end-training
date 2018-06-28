import React, { Component } from "react";

// in refactored version we dont need to import Component fronm react, only React itself
// import React from "react";

export default class MovieResultsHeader extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div>
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

// refactored 

// export default ({recordsNumber}) => (
//   <div>
//     <h3>{recordsNumber} movies founds</h3>
//     <span>
//         <h2>Sort by</h2>
//         <span>release date</span>
//         <span>rating</span>
//     </span>
//   </div>
// );
