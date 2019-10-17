import React, {Component} from 'react'
import '../Movie/Movie.css'

class Movie extends Component {
    render() {
        return (
        <div className="movie" onClick={() => this.props.selected(this.props.movie.id)}>
            <img src={this.props.movie.poster_path} alt="movie poster"></img>
            <div>{this.props.movie.name}</div>
            <div>{this.props.movie.genres.join(' ')}</div>
            <div>{this.props.movie.release_date}</div>
        </div>
        );
    }
}

export default Movie;