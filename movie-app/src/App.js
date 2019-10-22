import React, {Component} from 'react';
import './App.css';
import Home from './Home/Home'
import ViewMovie from './ViewMovie/ViewMovie'
import { BrowserRouter, Route} from 'react-router-dom';


class App extends Component {
  state = {
    selectedMovie: null,
    movies: []
  }

setSelectedMovie = (movie) => {
  this.setState({
    selectedMovie: movie
  });
}

setMovies = (movies) => {
  this.setState({
    movies: movies
  })
}

render(){
  return (
    <BrowserRouter>
    <div className="App">
      <Route path='/' exact render={() => <Home  selectedMovie={this.setSelectedMovie} setMovies={this.setMovies}/>}/>
      <Route path='/viewMovie' render={() => <ViewMovie  movie={{...this.state.selectedMovie}}  movies={[...this.state.movies]} />} />
    </div>
    </BrowserRouter>
  );
}

}

export default App;
