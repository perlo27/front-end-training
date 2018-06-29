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
            <SearchHeader />
            <div className="search-main-component-content">
                <SearchField />
                <div className="search-by-elements">
                    <ul>
                        <li><div>Search by</div></li>
                        <li><SearchByButton searchBy="Title" /></li>
                        <li><SearchByButton searchBy="Genre" /></li>
                        <li><SearchButton /></li>
                    </ul>
                </div>
                <SortByButton sortBy="Release date" />
                <SortByButton sortBy="Rating" />
            </div>

        </div>
    );
}
