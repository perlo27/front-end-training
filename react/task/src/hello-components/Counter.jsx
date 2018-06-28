import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


export default class Counter extends Component {
    constructor() {
        super();
        this.state = {
            counter: 0
        };
        this.decrease = this.decrease.bind(this);
        this.increase = this.increase.bind(this);
    }

    decrease() {
        // this.state.counter = this.state.counter - 1;
        this.setState({
            counter: this.state.counter - 1
        });
    }
    increase() {
        this.setState({
            counter: this.state.counter + 1
        });
    }
    render() {
        return (
            <div className="container">
                <div className="alert alert-success">Counter: {this.state.counter}</div>
                <div className="text-center">
                    <div className="btn-group">
                        <button className="btn btn-warning" onClick={this.decrease}>-
        </button>
                        <button className="btn btn-success" onClick={this.increase}>+
        </button>
                    </div>
                </div>
            </div>
        )
    }
}
