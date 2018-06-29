import React, { Component } from 'react'
import "./sort-by-button.css"

// export default class SortByButton extends Component {
//   render() {
//     return (
//       <div>
//         {this.props.sortBy}
//       </div>
//     )
//   }
// }

export default (props) => {
  return (
    <div>
      <button className="sort-by-button">{props.sortBy}</button>
    </div>
  );
}

