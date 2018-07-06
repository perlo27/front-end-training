import React, { Component } from 'react'

export default class Searchbar extends Component {
  constructor(props){
      super(props);
      this.state = {
          term: ''
      }
  }

  onInputChange(term){
      this.setState({
          term
      });
      this.props.onTermChange(term);
  }
  render() {
    return (
      <div className="search">
        <input onChange={event=>this.onInputChange(event.target.value)}/>
      </div>
    )
  }
}
