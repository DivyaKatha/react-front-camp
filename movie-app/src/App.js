import React, {Component} from 'react';
import './App.css';
import Home from './Components/Home/Home'
import ViewMovie from './Components/ViewMovie/ViewMovie'
import { BrowserRouter, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store'

class App extends Component {
 
render(){
  return (
    <Provider store={store}>
     <BrowserRouter>
    <div className="App">
      <Route path='/' exact render={() => <Home />}/>
      <Route path='/viewMovie/:id' render={(props) => <ViewMovie {...props}  />} />
    </div>
    </BrowserRouter>
    </Provider>
  );
}
}

export default App;
