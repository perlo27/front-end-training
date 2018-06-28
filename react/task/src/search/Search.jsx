import React, { Component } from 'react';
import SearchField from './SearchField';
import SearchButton from './SearchButton';
import SearchHeader from './SearchHeader';
import SearchByButton from './SearchByButton';
import SortByButton from './SortByButton';

export default class Search extends Component {
    render() {
        return (
            <div>
                <SearchHeader />
                <SearchField />
                <SearchButton />
                <SearchByButton searchBy="Genre" />
                <SearchByButton searchBy="Title" />
                <SearchByButton />
                <SortByButton sortBy="Release date" />
                <SortByButton sortBy="Rating" />
            </div>
        )
    }
}
