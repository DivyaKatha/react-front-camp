import React, {Component} from 'react';
import Movie from '../Movie/Movie';
import './Results.css'

class Results extends Component {
   
    render() {
        return (
        <div className="results" id="results">{
            this.props.movies.map((movie, index) => {
                return <Movie movie={movie} key={movie.id} selected={this.props.selectMovie}></Movie>
            })
        }</div>
        );
    }
}

export default Results;