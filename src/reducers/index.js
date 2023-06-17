import { combineReducers } from 'redux';
import { ADD_MOVIES, ADD_TO_FAVOURITES, REMOVE_FROM_FAVOURITES, SET_SHOW_FAVOURITES } from '../actions';

const initialMoviesState = {
    list: [],
    favourites: [],
    showFavourites: false
}

// creating reducer, here reducer is 'movies'
export function movies (state = initialMoviesState, action){
    switch (action.type){
        case ADD_MOVIES : 
             return {
                ...state,
                list: action.movies  //action coming from action creator function
             }
        case ADD_TO_FAVOURITES : 
             return {
                ...state,
                favourites: [action.movie, ...state.favourites]
             }
        case REMOVE_FROM_FAVOURITES : 
             const filteredArray = state.favourites.filter(
                 movie => movie.Title !== action.movie.Title
             )
             return {
                ...state,
                favourites: filteredArray
             }
        case SET_SHOW_FAVOURITES : 
             return {
                ...state,
                showFavourites: action.val
             }
        default :
             return state;     
    }
}


const initialSearchState = {
    result: { }                    //result is an empty state
}
// creating reducer "search"
export function search (state = initialSearchState, action){
    return state;
}

const initialRootState = {
    movies: initialMoviesState,
    search: initialSearchState
}
// // creating root reducer "search"
// export default function rootReducer (state = initialRootState, action){
//     return {
//         movies: movies (state.movies , action),     //movies represents first reducer movies, so movies will be managed by movies reducer
//         search: search (state.search , action)      //search represents second reducer search, so search will be managed by search reducer
//     }
// }

//combining two reducers movies and search, will give same output as rootReducer
export default combineReducers({
    movies,                         //movies represents first reducer movies, so movies will be managed by movies reducer
    search                          //search represents second reducer search, so search will be managed by search reducer
})
