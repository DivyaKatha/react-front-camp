import React, {Component} from 'react';
import './App.css';
import Home from './Home/Home'
import ViewMovie from './ViewMovie/ViewMovie'
import { BrowserRouter, Route} from 'react-router-dom';


class App extends Component {
  state = {
    selectedMovie: null,
  }

setSelectedMovie = (movie) => {
  this.setState({
    selectedMovie: movie
  });
}

render(){
  return (
    <BrowserRouter>
    <div className="App">
      <Route path='/' exact render={() => <Home  selectedMovie={this.setSelectedMovie}/>}/>
      <Route path='/viewMovie' render={() => <ViewMovie  movie={{...this.state.selectedMovie}}/>} />
    </div>
    </BrowserRouter>
  );
}

}

export default App;
