import React from 'react';
import MovieSearch from './MovieSearch';
import MovieSearchPanel from './MovieSearchPanel';

export default class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    state = {
        searchText: "",
        searchBy: "title"
    }

    handleSubmit() {

    }
    
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <MovieSearch/>
                <MovieSearchPanel/>
            </form>
        );
    }
}
