import React, { Component } from 'react'

export default class SearchButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: ''
        }
    }
    handleSubmit() {
        console.log("XDD")
    }
    render() {
        return (
            <button onClick={event => this.handleSubmit(event.target.value)} className="search-button">Search!</button>
        )
    }
}
