// {
//     type: 'ADD_MOVIES',
//     movies: [m1, m2, m3]
// }
// {
//     type: 'DECREASE_COUNT',
// }

//action types variable
export const ADD_MOVIES = "ADD_MOVIES";
export const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITE";
export const REMOVE_FROM_FAVOURITES = "REMOVE_FROM_FAVOURITE";
export const SET_SHOW_FAVOURITES = "SET_SHOW_FAVOURITES";

//action creator function
export function addMovies (movies) {
    return {
        type: ADD_MOVIES,
        movies                      //also can be written like movies: movies
      }
}
export function addFavourite (movie) {
    return {
        type: ADD_TO_FAVOURITES,
        movie                    //also can be written like movie: movie
      }
}
export function removeFromFavourites (movie) {
    return {
        type: REMOVE_FROM_FAVOURITES,
        movie                    //also can be written like movie: movie
      }
}
export function setshowFavourites (val) {
    return {
        type: SET_SHOW_FAVOURITES,
        val                    //also can be written like movie: movie
      }
}