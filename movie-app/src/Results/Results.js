import React, {Component} from 'react'
import Movie from '../Movie/Movie'

class Results extends Component {

    movies = [0,1,2,3,4,5,7,8,9,10];
    
    render() {
        return (
        <div>{
            this.movies.map(movie => {
                return <Movie></Movie>
            })
        }</div>
        );
    }
}

export default Results;