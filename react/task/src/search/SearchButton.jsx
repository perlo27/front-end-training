import React, { Component } from 'react'


export default class SearchButton extends Component {
    handleClick() {
        alert("Click!")
    }

    render() {
        return (
            <button className ="search-button" onClick={this.handleClick}>
                Siema
            </button>)
    }
}

