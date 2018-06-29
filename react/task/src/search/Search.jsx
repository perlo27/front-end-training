import React, { Component } from 'react';
import SearchField from './SearchField';
import SearchButton from './SearchButton';
import SearchHeader from './SearchHeader';
import SearchByButton from './SearchByButton';
import SortByButton from './SortByButton';
import "./search.css";
import "./search-button.css";
import "./search-by-button.css"

export default () => {
    return (
        <div className="search-main-component">
            <SearchHeader />
            <div className="search-main-component-content">
                <SearchField />
                <SearchButton className="search-button" />
                <div className="search-by-elements">
                    <div>Search by</div>
                    <SearchByButton className="search-by" searchBy="Title" />
                    <SearchByButton className="search-by" searchBy="Genre" />
                </div>
                <SortByButton sortBy="Release date" />
                <SortByButton sortBy="Rating" />
            </div>

        </div>
    );
}
