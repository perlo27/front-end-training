import React, { Component } from 'react';
import Search from './components/search/Search';
import MoviesContainer from './components/movies-container/MoviesContainer';

export default class Container extends Component {
    render() {
        return (
            <div>
                <Search></Search>
                <MoviesContainer></MoviesContainer>
            </div>
        );
    }
}
