import React, {Component} from 'react';
import './ViewMovie.css';
import {Link} from 'react-router-dom';
import Results from '../Results/Results';
import Title from '../Title/Title';

class ViewMovie extends Component{

    state = {
        genreMovies: []
    }
  
    headerStyle = {
      'text-align': 'left',
      'padding': '10px'
    }
    findCommonElement(array1, array2) { 
        for(let i = 0; i < array1.length; i++) { 
            for(let j = 0; j < array2.length; j++) { 
                if(array1[i] === array2[j]) { 
                    return true; 
                } 
            } 
        } 
        return false;  
    } 
    
    componentDidMount= () => {
        let genreMovies = this.props.movies.filter((movie) => {
                   if(this.findCommonElement(this.props.movie.genres, movie.genres) && this.props.movie.title !== movie.title)
                   return true;
        });

        this.setState({
            genreMovies: genreMovies
        });
    }
    
    render() {
    
        if(this.state.genreMovies.length){
            var header = <h3>Films by same genre</h3>
        }
        return <div>
            <div className="viewMovie">
            <div className="poster">
                <img src={this.props.movie.poster_path}></img>
            </div>
            <div className="details">
            <Title></Title>
                <p>{this.props.movie.title}</p>
                <p>{this.props.movie.tagline}</p>
                <p>{this.props.movie.release_date}</p>
                <p>{this.props.movie.overview}</p>
                <Link to="/">Back to home</Link>
            </div>      
           </div>
           <div style={this.headerStyle}> { header }</div> 
            <div><Results movies={[...this.state.genreMovies]}></Results>
          </div>
        </div>
        
    }
}

export default ViewMovie;