import React, { Component } from 'react';
import "./search-by-button.css";

// export default class SearchByButton extends Component {
//   render() {
//     return (
//       <div>
//           {this.props.searchBy}
//       </div>
//     )
//   }
// }

export default (props) => {
  return (
    <div>
      <button className="search-by">{props.searchBy}</button>
    </div>
  );
}
