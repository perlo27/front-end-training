import React, { Component } from 'react';
import SearchField from './SearchField';
import SearchButton from './SearchButton';
import SearchHeader from './SearchHeader';
import SearchByTitleButton from './SearchByTitleButton';
import SearchByGenreButton from './SearchByGenreButton';

export default class Searc extends Component {
    render() {
        return (
            <div>
                <SearchHeader />
                <SearchField />
                <SearchButton />
                <SearchByTitleButton />
                <SearchByGenreButton />
            </div>
        )
    }
}
