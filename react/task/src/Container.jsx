import React, { Component } from 'react';
import Search from './components/search/Search';
import MoviesContainer from './components/movies-container/MoviesContainer';

export default class Container extends Component {
    constructor(props){
        super(props);
        this.state = {
            query : ""
        }
        // this.handleSearchQuery = this.handleSearchQuery.bind(this);
    }

    // handleSearchQuery(value){
        // console.log("XDD");
    // }
    render() {
        return (
            <div>
                <Search ></Search>
                <MoviesContainer></MoviesContainer>
            </div>
        );
    }
}
