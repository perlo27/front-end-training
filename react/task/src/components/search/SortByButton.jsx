import React, { Component } from 'react'

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
      <button className="sort-by-button">{props.sortBy}</button>
  );
}

