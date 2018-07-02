import React, { Component } from 'react';
import SearchButton from './SearchButton'

export default class SearchField extends Component {
  render() {
    return (
      <div className="search-field">
        <SearchButton ref={foo => {
          this.foo = foo;
        }} />
        <input type="text"></input>
      </div>
    );
  }
  componentDidMount() {
    var x = this.foo.myFunc();
    console.log(x);
  }
}
