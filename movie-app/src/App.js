import React, {Component} from 'react';
import './App.css';
import Home from './Components/Home/Home'
import ViewMovie from './Components/ViewMovie/ViewMovie'
import { BrowserRouter, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store'

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
    <Provider store={store}>
     <BrowserRouter>
    <div className="App">
      <Route path='/' exact render={() => <Home  selectedMovie={this.setSelectedMovie} setMovies={this.setMovies}/>}/>
      <Route path='/viewMovie' render={() => <ViewMovie  movie={{...this.state.selectedMovie}}  movies={[...this.state.movies]} />} />
    </div>
    </BrowserRouter>
    </Provider>

  );
}

}

export default App;
