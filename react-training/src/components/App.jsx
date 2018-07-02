import React, { Component } from "react";
import MovieContainer from "./container/MovieContainer";
import { Footer } from "./footer/Footer";
import HeaderContainer from "./header/HeaderContainer";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit({query, searchBy}) {
    this.setState({query: query, searchBy: searchBy}, () => this.cont.loadData(this.state));
  }
  
  render() {
    return (
      <div>
        <HeaderContainer handleSubmit={this.handleSubmit} />
        <MovieContainer ref={cont => this.cont = cont} />
        <Footer />
      </div>
    );
  }
}
