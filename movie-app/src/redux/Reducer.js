import {LOAD, SEARCH} from './Constants'
const initialState = {
    movies: null,
    filteredMovies: null,
    movieid: null,
    sortType: null,
    searchType: null,
    searchInput: null
}

export default appreducer  = (state = initialState, action) => {
    switch(action.type){
        case LOAD: return {
            ...state,
            movieid: action.paylod.id
        }
        case SEARCH: {
            state = {...state,filteredMovies:action.payload};
            return state;                
        }
    }

}