import {SEARCH, LOAD, VIEW} from './Constants';
import  axios from 'axios';

export const load = dispatch => {
    axios.get('https://reactjs-cdp.herokuapp.com/movies').then( data => {
        dispatch({
            type: LOAD,
            payload: data.data.data
        })
        dispatch({
            type: SEARCH,
            payload: data.data.data
          });
    })
    .catch(error => {
        console.log('Looks like there was a problem: \n', error);
      });  
}

 export const viewDetails = ( dispatch, movieId) => {
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


