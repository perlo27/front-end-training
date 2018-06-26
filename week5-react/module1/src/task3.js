import React from "react";

class Container extends React.Component {
  render() {
    return <Page1 />;
  }
}

class Page1 extends React.Component {
  constructor(props) {
    super(props);
    this.allMovies = [{title:"abc",id:1, date:"2018-06-25", rate:3, genre:"drama"},
    {title:"cde",id:2, date:"2018-06-24", rate:4, genre:"action"},
    {title:"fgh",id:3, date:"2018-06-26", rate:2, genre:"drama"},];
    this.allCriterias = ["genre", "title"];
    this.state = {searchActive: false, searchQuery:'',
    searchMovieList: [], searchCriteria: this.allCriterias[0],
    };
    this.sortParameters = {rate:"rate", date:"date"};
  }

  handleSearch() {
    this.setState({
      searchActive: true
    });
  }

  updateSearchQuery(event) {
    let newQuery = null;
    if(event) {
      newQuery = event.target.value;
    } else {
      newQuery = this.state.searchQuery;
    }
    const criteria = this.state.searchCriteria;
    console.log("Updating search query");
    const filteredMovieList = this.allMovies.filter(movie => movie[criteria].startsWith(newQuery));
    this.setState({
      searchQuery: newQuery,
      searchMovieList : filteredMovieList
    });
  }

handleSort(sortField) {
  this.setState({
    searchMovieList: this.state.searchMovieList.sort((a,b) => a[sortField] > b[sortField])
  });
}

handleCriteria(criteria) {
  this.setState({
    searchCriteria: criteria
  })
}

movieSelected(movieId) {
  if(movieId){
    const selectedMovie = this.allMovies.find(movie => movie.id === movieId);
    const similarMovies = this.allMovies.filter(otherMovie => otherMovie.genre === selectedMovie.genre && otherMovie.id !== selectedMovie.id);
    console.log("Similar : " + similarMovies.length);
    this.setState({
      selectedMovie,
      similarMovies,
    });
  } else {
    this.setState({
      selectedMovie:null,
      similarMovies:[],
    });
  }
}

  render() {
    console.log("Rendering page");
    if(this.state.selectedMovie) {
      return (<SelectedMovie similarMovieSelected={this.movieSelected.bind(this)}  key={"Page1-SelectedMovie"} backToSearch={() => this.movieSelected.bind(this)}  movie={this.state.selectedMovie} similarMovies={this.state.similarMovies} />);
    }
    return (<div>
      <div>FIND YOUR MOVIE</div>
      <input type="text" value={this.state.searchQuery} onChange={evt => this.updateSearchQuery(evt)}></input>
      <div className="searchRow">
        <span>SEARCH BY</span>
        {this.allCriterias.map(someCriteria =>{
            const className = this.state.searchCriteria === someCriteria ? "selectedButton" : "";
            return <input className={className} key={"Page1-searchRow-input-"+someCriteria} type="button" value={someCriteria.toUpperCase()} onClick={evt => this.handleCriteria(someCriteria)}></input>
          })
        }
        <input key="Page1-searchRow-input-search" type="button" value="SEARCH" onClick={() => this.handleSearch()}></input>
      </div>
      {
        this.state.searchActive
        &&
        (this.state.searchMovieList.length
          ? <div>
            <div>
            <span>{this.state.searchMovieList.length} Movies Found</span>
            <div>
              <span>Sort By</span>
              <input type="button" value="release date" onClick={() => this.handleSort(this.sortParameters.date)}></input>
              <input type="button" value="rating" onClick={() => this.handleSort(this.sortParameters.rate)}></input>
            </div>
          </div>
          <SearchResults movieSelected={this.movieSelected.bind(this)}  searchMovieList={this.state.searchMovieList} />
          </div>
          : <div>No results found</div>)
       }
    </div>);
  }
}

class SearchResults extends React.Component {

  constructor(props) {
    super(props);
    this.sortParameters = {rate:"rate", date:"date"}
  }


  render() {
    console.log("Rendering search results");
      return (<div>
          <ul>
            {this.props.searchMovieList.map((result) => {
              return (<li key={"SearchResults-li-"+result.id} onClick={() => this.props.movieSelected(result.id)}>{result.title}</li>);
              })
            }
          </ul>
        </div>);
      }
  }

  class SelectedMovie extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      const movie = this.props.movie;
      const similarMovies = this.props.similarMovies;
      return <div>
        <a key="SelectedMovie-a-backToSearch" href="" onClick={this.props.backToSearch()}>Search</a>
        <div key="SelectedMovie-div-movieTitle">{movie.title}</div>
        <span key="SelectedMovie-div-filmsBy">Films by genre {movie.genre}</span>
        <div key="SelectedMovie-div-similarMovies">
          <ul>
            {
              similarMovies.map(similarMovie => <li key={"SelectedMovie-div-similarMovies-li-"+similarMovie.id} onClick={() => this.props.similarMovieSelected(similarMovie.id)}>{similarMovie.title}</li>)
            }
          </ul>
        </div>
      </div>
    }
  }

export function task3() {
  return <Container />;
}
