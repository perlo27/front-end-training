import React, { Component } from 'react';
import { render } from 'react-dom';

const element = React.createElement(
    "h1",
    { className: "title" },
    "Hello world!"
);

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

class ShoppingList extends React.Component {
    render() {
        return (
            <div>
                <Welcome name="Sara"/>
                <div className="shopping-list">
                    <h1>Shopping List for {this.props.name}</h1>
                    <ul>
                        <li>Instagram</li>
                        <li>WhatsApp</li>
                        <li>Oculus</li>
                    </ul>
                </div>
            </div>
        );
    }
}
render(<ShoppingList name="Mark" />, document.getElementById("root"));
