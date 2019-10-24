import React, {Component} from 'react';
import './ViewMovie.css';
import {Link} from 'react-router-dom';
import Results from '../Results/Results';

class ViewMovie extends Component{
     state = {
         genreMovies: []
     }

     componentDidMount() {

    

     }
    render() {
        return <div className="viewMovie">
            <div className="poster">
                <img src={this.props.movie.poster_path}></img>
            </div>
            <div className="details">
                <p>{this.props.movie.title}</p>
                <p>{this.props.movie.tagline}</p>
                <p>{this.props.movie.release_date}</p>
                <p>{this.props.movie.overview}</p>
                <Link to="/">Back to Home</Link>
            </div>
            <Results></Results>
            
        </div>
    }
}

export default ViewMovie;