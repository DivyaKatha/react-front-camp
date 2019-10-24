import {LOAD, SEARCH} from './Constants'
const initialState = {
    movies: []
}

function appReducer(state = initialState, action) {
    switch(action.type){
        case LOAD: {
            return {
            ...state,
            movies: action.payload
        }}
        default: return state
    }
}

export default appReducer;