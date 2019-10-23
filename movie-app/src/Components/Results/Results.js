import React from 'react';
import Movie from '../Movie/Movie';
import './Results.css'
import NoMovieFound from '../NoMovieFound/NoMovieFound';

const Results = (props) => {

        if(props.movies.length) return (
        <div className="results" id="results">{
            props.movies.map((movie, index) => {
                return <Movie movie={movie} key={movie.id} selected={props.selectMovie}></Movie>
            })
        }</div>
        ); 
        else return (<NoMovieFound></NoMovieFound>)
}

export default Results;