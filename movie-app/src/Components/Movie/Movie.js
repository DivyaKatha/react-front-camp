 import React,{Component} from 'react'
import '../Movie/Movie.css'
import {Link} from 'react-router-dom';

class Movie extends Component{
    render(){
            let link =`/viewMovie/${this.props.movie.id}`
            return (
            <Link to={link}>
            <div className="movie">
            <div className="image"><img src={this.props.movie.poster_path} alt="movie poster"></img></div>
            <div>{this.props.movie.name}</div>
            <div>{this.props.movie.genres.join(' ')}</div>
            <div>{this.props.movie.release_date}</div>
            </div></Link>
        );
}
}
 
export default Movie;
