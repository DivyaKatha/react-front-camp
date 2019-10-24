import React from 'react'
import '../Movie/Movie.css'
import {Link} from 'react-router-dom';


const Movie = (props) => {
        return (
            <Link to='/viewMovie'>
            <div className="movie" onClick={() => props.selected(props.movie)}>
            <div className="image"><img src={props.movie.poster_path} alt="movie poster"></img></div>
            <div>{props.movie.name}</div>
            <div>{props.movie.genres.join(' ')}</div>
            <div>{props.movie.release_date}</div>
        </div></Link>
        );
}

export default Movie;