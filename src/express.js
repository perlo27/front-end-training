import React from "react";
import ReactDOM from "react-dom";

const element1 = React.createElement (
    "h1",
    {className: "title"},
    "Hello World!"
);

const element2 = React.createElement (
    "div",
    {},
    "Some description..."
);

const root = React.createElement("div", {}, element1, element2);

ReactDOM.render(root, document.getElementById("root"));