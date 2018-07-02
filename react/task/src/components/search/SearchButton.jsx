import React, { Component } from 'react';

export default class SearchButton extends Component {
    constructor(props){
        super(props);
        this.state = {
            valueToSearch : 'sss'
        };
        this.handleClick = this.handleClick.bind(this);
    }
    myFunc(){
        return "hello";
    }
    
    handleClick() {
        alert(this.state.valueToSearch);
    }

    render() {
        return (
            <div>
                <button className="search-button" onClick={this.handleClick}>
                    Search
                 </button>
            </div>
        );
    }
}

