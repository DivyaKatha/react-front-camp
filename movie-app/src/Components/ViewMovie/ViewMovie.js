import React, {Component} from 'react';
import './ViewMovie.css';
import {Link} from 'react-router-dom';
import Results from '../Results/Results';
import Title from '../Title/Title';
import { connect } from "react-redux";
import { viewDetails} from '../../redux/Actions'

class ViewMovie extends Component{
    genreMovies = [];
    
    headerStyle = {
      'padding': '5px',
      'backgroundColor': 'grey',
      'textAlign': 'center',
      'color': 'white'
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
        this.props.getMovie(this.props.match.params.id);
    }

    componentDidUpdate(previousProps){
        if(previousProps.match.params.id !== this.props.match.params.id){
            this.props.getMovie(this.props.match.params.id);
        }
    }
    
    render() {

        if(this.props.movies && this.props.movie){
            let genreMovies = this.props.movies.filter((movie) => {
                       if(this.findCommonElement(this.props.movie.genres, movie.genres) && this.props.movie.title !== movie.title)
                       return true;
            });
            this.genreMovies = genreMovies;
        }
    
        if(this.genreMovies.length){
            var header = <h3>FILMS BY SIMILAR GENRE</h3>
        }
        if(this.props.movie)
        return <div>
            <div className="viewMovie">
            <div className="poster">
                <img src={this.props.movie.poster_path} className="posterStyle"></img>
            </div>
            <div className="details">
            <Title></Title>
                <p>{this.props.movie.title}</p>
                <p>{this.props.movie.tagline}</p>
                <p>{this.props.movie.release_date}</p>
                <p>{this.props.movie.overview}</p>
                <p>{  this.props.movie.runtime? this.props.movie.runtime + ' min': null}</p>
                <Link to="/">Back to home</Link>
            </div>      
           </div>
           <div style={this.headerStyle}> { header }</div> 
            <div><Results movies={this.genreMovies}></Results>
           </div>
        </div> 
        else return <div>
        View Movie
        </div>  
    }
}

const mapStateToProps = (state, ownProps) => {  
    return {
        movie : state.selectedMovie,
        movies: state.movies
    }
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
        getMovie: (id) => viewDetails(dispatch, id),
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(ViewMovie);