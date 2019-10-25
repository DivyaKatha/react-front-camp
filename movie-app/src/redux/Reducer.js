import {LOAD, UPDATE, VIEW} from './Constants'
const initialState = {
    movies: [],
    filteredMovies: [],
    selectedMovie: null
}

function appReducer(state = initialState, action) {
    switch(action.type){
        case LOAD: {
            return {
            ...state,
            movies: action.payload,
            filteredMovies: action.payload
        }}

        case UPDATE: {
            return {
            ...state,
            filteredMovies: action.payload
        }}

        case VIEW: {
            return {
                ...state,
                selectedMovie: action.payload
            }
        }
        default: return state
    }
}

export default appReducer;