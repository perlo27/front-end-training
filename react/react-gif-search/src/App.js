import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar';
import GifsList from './components/GifsList';
import request from 'superagent';
import './styles/app.css'

class App extends Component {
  constructor() {
    super();
    this.state = {
      gifs: [],
      url: ''
    }
    this.handleTermChange = this.handleTermChange.bind(this);
  }
  handleTermChange = (term) => {
    const url = `http://api.giphy.com/v1/gifs/search?q=${term.replace(/\s/g, '+')}&api_key=dc6zaTOxFJmzC`;

    request.get(url, (err, res) => {
      this.setState({
        url,
        gifs: res.body.data
      });
    });
  }


  render() {
    return (
      <div>
        <SearchBar onTermChange={term => this.handleTermChange(term)} />
        <GifsList gifs={this.state.gifs} />
      </div>
    );
  }
}

export default App;
