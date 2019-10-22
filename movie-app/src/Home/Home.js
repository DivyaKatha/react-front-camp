import React, {Component} from 'react'
import Search from '../Search/Search'
import Results from '../Results/Results'
import Filter from '../Filter/Filter';
import axios from 'axios';

class Home extends Component {

    state = {
        movies: [],
        searchInput: '',
        fullList: []
    }
    
    componentDidMount() {
        axios.get('https://reactjs-cdp.herokuapp.com/movies').then((data) => {
        this.setState({ movies: data.data.data });
        this.setState({ fullList: data.data.data })
        this.props.setMovies([...this.state.fullList]);
        })
     
    }
    
    onSearchHandler = (input, category) => {
    
      let searchResults = []

      if(input){
        if(category === 'title'){
            searchResults = this.state.fullList.filter((movie) => {
             return (movie.title).toUpperCase().includes(input.toUpperCase());
           })
         }
         else if(category === 'genre'){
            searchResults = this.state.fullList.filter((movie) => {
             let genreList = [];
             movie.genres.forEach(element => {
                genreList.push(element.toUpperCase());
              });
             return genreList.includes(input.toUpperCase());
           })
         }
         
      this.setState({
        movies:[...searchResults] 
      })
      }
      else this.setState({
            movies:[...this.state.fullList] 
          })
    }
    
    compareReleaseDate (a,b) {
      let adate = new Date(a.release_date);
      let bdate = new Date(b.release_date);
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
     
    setSelectedMovie = (movie) => {
        this.props.selectedMovie(movie);
      }
  
    render() {
        return (
            <div className="home">
                <Search search={(input, category) => this.onSearchHandler(input, category)} ></Search>
                <Filter count={this.state.movies.length} sortBy={this.onSortHandler} ></Filter>
                <Results movies={[...this.state.movies]} selectMovie={this.setSelectedMovie}></Results>
            </div>
        );
    }
}

export default Home;