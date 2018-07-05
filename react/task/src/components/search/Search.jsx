import React, { Component } from 'react';
import SearchField from './SearchField';
import SearchButton from './SearchButton';
import SearchHeader from './SearchHeader';
import SearchByButton from './SearchByButton';
import SortByButton from './SortByButton';
import "./search.css";


export default class Search extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSearchQuery = this.handleSearchQuery.bind(this);
    }

    handleSubmit() {
        console.log("submit");
    }

    handleSearchQuery(value) {
        this.setState({value: value}, () => console.log(this.state.value + " search query"));
    }

    render() {
        return (
            <div className="search-main-component">
                <div className="search-main-component-content">
                    <SearchHeader />
                    <SearchField handleSearchQuery={this.handleSearchQuery}/>
                    <div className="search-by-elements">
                        <ul>
                            <li><div>Search by</div></li>
                            <li><SearchByButton searchBy="Title" /></li>
                            <li><SearchByButton searchBy="Genre" /></li>
                            <li><SearchButton handleSubmit={this.handleSubmit} /></li>
                        </ul>
                    </div>
                </div>
                <div className="search-sidebar">
                    <ul>
                        <li>7 movies found</li>
                        <li>Sort by</li>
                        <li><SortByButton sortBy="rating" /></li>
                        <li><SortByButton sortBy="release date" /></li>
                    </ul>
                </div>
            </div>
        );
    }
}
