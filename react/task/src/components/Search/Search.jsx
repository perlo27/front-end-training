import React, { Component } from 'react';
import SearchField from './SearchField';
import SearchButton from './SearchButton';
import SearchHeader from './SearchHeader';
import SearchByButton from './SearchByButton';
import SortByButton from './SortByButton';
import "./search.css";


export default () => {
    return (
        <div className="search-main-component">
            <div className="search-main-component-content">
                <SearchHeader />
                <SearchField />
                <div className="search-by-elements">
                    <ul>
                        <li><div>Search by</div></li>
                        <li><SearchByButton searchBy="Title" /></li>
                        <li><SearchByButton searchBy="Genre" /></li>
                        <li><SearchButton /></li>
                    </ul>
                </div>
            </div>
            <div className="search-sidebar">
                <ul>
                    <li>Sort by</li>
                    <li>7 movies found</li>
                    <li><SortByButton sortBy="rating" /></li>
                    <li><SortByButton sortBy="release date" /></li>
                </ul>
            </div>
        </div>
    );
}
