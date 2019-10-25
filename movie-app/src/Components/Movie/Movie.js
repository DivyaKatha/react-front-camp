import React,{Component} from 'react'
import '../Movie/Movie.css'
import {Link} from 'react-router-dom';
import {viewDetails} from '../../redux/Actions'
import { connect } from "react-redux";

class Movie extends Component{

    setSelectedMovie =  async() => {
        await this.props.selectMovie(this.props.movie.id);
        console.log(this.props.selectedMovie);
        this.props.selected(this.props.selectedMovie)
    }
    
    render(){
            return (
            <Link to='/viewMovie'>
            <div className="movie" onClick={this.setSelectedMovie}>
            <div className="image"><img src={this.props.movie.poster_path} alt="movie poster"></img></div>
            <div>{this.props.movie.name}</div>
            <div>{this.props.movie.genres.join(' ')}</div>
            <div>{this.props.movie.release_date}</div>
        </div></Link>
        );
}
}

const mapStateToProps = (state, ownProps) => {  
    return {
        selectedMovie : state.selectedMovie,
    }
  };
  
const mapDispatchToProps = (dispatch) => {
    return {
        selectMovie: (id) => viewDetails(dispatch, id),
    }
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(Movie);
