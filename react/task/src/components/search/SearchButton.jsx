import React, { Component } from 'react';

export default class SearchButton extends Component {
    handleClick() {
        alert("Click!")
    }

    render() {
        return (
            <div>
                <button className="search-button" onClick={this.handleClick}>
                    Search
                 </button>
            </div>
        );
    }
}

