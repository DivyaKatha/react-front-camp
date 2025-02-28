import {LOAD, VIEW, UPDATE} from './Constants';
import  axios from 'axios';

function load(dispatch) {
    axios.get('https://reactjs-cdp.herokuapp.com/movies').then( data => {
        dispatch({
            type: LOAD,
            payload: data.data.data
        })
    })
    .catch(error => {
        console.log('Looks like there was a problem: \n', error);
      });  
}

function updateFilteredMovies(dispatch,data){
    dispatch({
        type:UPDATE,
        payload:data
    });
}

async function viewDetails ( dispatch, movieId){
    axios.get('https://reactjs-cdp.herokuapp.com/movies/'+ movieId.toString()).then( data => {
        console.log(data.data);
        dispatch({
            type: VIEW,
            payload: data.data
        })
    })
    .catch(error => {
        console.log('Looks like there was a problem: \n', error);
      });  
}

export {
    load,
    viewDetails,
    updateFilteredMovies
}


