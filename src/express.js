import React from "react";
import ReactDOM from "react-dom";

// class HelloMessage extends React.Component {
//     render() {
//       return <div>Hello {this.props.name}</div>;
//     }
//   }
  
// var mountNode = document.getElementById("app");
// ReactDOM.render(<HelloMessage name="World!" />, mountNode);

const element = React.createElement (
    "h1",
    {classname: "title"},
    "Hello World!"
);

ReactDOM.render(element, document.getElementById("root"))