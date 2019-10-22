import React, {Component} from 'react';
import Movie from '../Movie/Movie';
import './Results.css'
import NoMovieFound from '../NoMovieFound/NoMovieFound';

class Results extends Component {
   
    render() {
        if(this.props.movies.length) return (
        <div className="results" id="results">{
            this.props.movies.map((movie, index) => {
                return <Movie movie={movie} key={movie.id} selected={this.props.selectMovie}></Movie>
            })
        }</div>
        ); else return (<NoMovieFound></NoMovieFound>)
    }
}

export default Results;