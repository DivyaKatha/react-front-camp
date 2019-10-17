import React, {Component} from 'react';
import './App.css';
import Home from './Home/Home'
import ViewMovie from './ViewMovie/ViewMovie'
import axios from 'axios';
import { BrowserRouter, Route} from 'react-router-dom';


class App extends Component {
  state = {
    movies: [],
    searchInput: '',
    fullList: [],
    selectedMovie: null,
    currentView:'list'
}

componentDidMount() {
    axios.get('https://reactjs-cdp.herokuapp.com/movies').then((data) => {
    this.setState({ movies: data.data.data });
    this.setState({ fullList: data.data.data })
    })
}

onSearchHandler = (input, category) => {

  let searchResults = []

  if(category === 'title'){
     searchResults = this.state.fullList.filter((movie) => {
      return (movie.title).toUpperCase().includes(input.toUpperCase());
    })
  }
  else if(category === 'genre'){
     searchResults = this.state.fullList.filter((movie) => {
      return movie.genres.includes(input);
    })
  }
 
  this.setState({
    movies:[...searchResults] 
  })

}

compareReleaseDate (a,b) {
  let adate = new Date(a);
  let bdate = new Date(b);
  if (adate.getTime() > bdate.getTime()) return 1;
  if (bdate.getTime() > adate.getTime()) return -1;
  return 0;
}

compareRating (a,b) {
  if (a.vote_count < b.vote_count) return 1;
  if (b.vote_count < a.vote_count) return -1;
  return 0;
}

onSortHandler = (val) => {
  let movies = [...this.state.fullList];
  let sortedMovies = [];
  if(val === 'releaseDate') {
    sortedMovies = movies.sort(this.compareReleaseDate);
  } else if(val === 'rating') {
    sortedMovies = movies.sort(this.compareRating);
  }

  this.setState({
    movies: sortedMovies
  })
}
 
setSelectedMovie = (id) => {
  this.setState({
    currentView: 'details'
  })
  let idval = id;
  let selectedMovie = this.state.fullList.filter( movie => (movie.id == idval))
    this.setState({
      selectedMovie: {...selectedMovie[0]}
    })
}

render(){
  return (
    <BrowserRouter>
    <div className="App">
      {/* <Home movies={this.state.movies} 
      onSearch={this.onSearchHandler} 
      sortBy={this.onSortHandler} 
      selectedMovie={this.setSelectedMovie}>
      </Home>
      <ViewMovie  movie={{...this.state.selectedMovie}} /> */}
      <Route path='/' exact render={() => <Home movies={this.state.movies} 
      onSearch={this.onSearchHandler} 
      sortBy={this.onSortHandler} 
      selectedMovie={this.setSelectedMovie}>
      </Home>}/>
      <Route path='/viewMovie' render={() => <ViewMovie  movie={{...this.state.selectedMovie}}/>} />
    </div>
    </BrowserRouter>
  );
}
}

export default App;
