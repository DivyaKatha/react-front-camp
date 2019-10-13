import React, {Component} from 'react'
import '../Movie/Movie.css'

class Movie extends Component {
    render() {
        return (
        <div className="movie">
            <image href="" height="250px" width="100px"></image>
            <div>Title</div>
            <div>Genre</div>
            <div>Release year</div>
        </div>
        );
    }
}

export default Movie;