import React, {Component} from 'react'
import Search from '../Search/Search'
import Results from '../Results/Results'
import Filter from '../Filter/Filter';
import { connect } from "react-redux";
import { load, updateFilteredMovies } from '../../redux/Actions'


class Home extends Component {

    componentDidMount() {
     this.props.getMovies();
    }
    
    onSearchHandler = (input, category) => {
    
      let searchResults = []

      if(input) {
        if(category === 'title'){
            searchResults = this.props.filteredMovies.filter((movie) => {
             return (movie.title).toUpperCase().includes(input.toUpperCase());
           })
         }
         else if(category === 'genre'){
            searchResults = this.props.filteredMovies.filter((movie) => {
             let genreList = [];
             movie.genres.forEach(element => {
                genreList.push(element.toUpperCase());
              });
             return genreList.includes(input.toUpperCase());
           })
         }

      this.props.filterMovies(searchResults);
      }
      else this.props.filterMovies(this.props.movies);

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
      let movies = [...this.props.filteredMovies];
      let sortedMovies = [];
      if(val === 'releaseDate') {
        sortedMovies = movies.sort(this.compareReleaseDate);
      } else if(val === 'rating') {
        sortedMovies = movies.sort(this.compareRating);
      }
      this.props.filterMovies(sortedMovies);

    }
     
    setSelectedMovie = (movie) => {
        this.props.selectedMovie(movie);
      }
  
    render() {
        return (
            <div className="home">
                <Search search={(input, category) => this.onSearchHandler(input, category)} ></Search>
                <Filter count={this.props.movies.length} sortBy={this.onSortHandler} ></Filter>
                <Results movies={this.props.filteredMovies} selectMovie={this.setSelectedMovie}></Results>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {  
  return {
      movies : state.movies,
      filteredMovies: state.filteredMovies
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
      getMovies: () => load(dispatch),
      filterMovies: (data) => updateFilteredMovies(dispatch,data)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);