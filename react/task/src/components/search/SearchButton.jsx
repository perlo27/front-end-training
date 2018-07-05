import React, { Component } from 'react';
import SearchField from './SearchField';

export default class SearchButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: ""
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleSearchQuery = this.handleSearchQuery.bind(this);
        this.handleSumbit = this.handleSumbit.bind(this);
    }
    handleSearchQuery(query) {
        this.setState({
            query: query
        });
    }

    handleClick(event) {
        event.preventDefault();
        this.handleSubmit();
    }

    handleSumbit() {
        this.props.handleSubmit(this.state);
    }

    render() {
        return (
            <button className="search-button" onClick={this.handleClick}>
                Search
                 </button>
        );
    }
}

