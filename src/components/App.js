import React from 'react';
import { data } from '../data';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import { addMovies, setshowFavourites } from '../actions';


class App extends React.Component {
  componentDidMount(){
    const {store} = this.props; //destructuring 
    store.subscribe(() => {
      console.log("UPDATED");
      this.forceUpdate();
    })
    //make api call
    //dispatch action
    store.dispatch(addMovies(data));
    console.log("State is: ", this.props.store.getState())
  }

  isMovieFavourite = (movie) => {
    const {movies} = this.props.store.getState();
    const {favourites} = movies; //destrucing favourite array from state getstate()
    const index = favourites.indexOf(movie);  //if index not found, it will give -1
    if(index !== -1){
      return true;       //found the movie
    }
    return false;
  }
  onChangeTab = (val) => {
    this.props.store.dispatch(setshowFavourites(val))
  }
  render() {
        const {movies} = this.props.store.getState();  //taking movies from store.getState() using destructuring
        console.log("movies is: ", movies)
        const {list, favourites, showFavourites} = movies;   //destructure
        console.log("RENDER: ", this.props.store.getState())
        const displayMovies = showFavourites ? favourites : list;
        return (
          <div className ="App">
            <Navbar/>
            <div className ="main">
                <div className ="tabs">
                    <div className ={`tab ${showFavourites ? '' : 'active-tabs'}`} onClick ={() => this.onChangeTab(false)}> Movies </div>
                    <div className ={`tab ${showFavourites ? 'active-tabs' : ''}`} onClick ={() => this.onChangeTab(true)}> Favourites </div>
                </div>
                <div className ="list">
                    {displayMovies.map((movie, index) => (
                      <MovieCard 
                          movie ={movie} 
                          dispatch ={this.props.store.dispatch} 
                          isFavourite ={this.isMovieFavourite(movie)}
                          key={`movies-${index}`}/>
                    ))}
                </div>
                {displayMovies.length === 0 ? <div className ="no-movies"> No movie to display</div> : null}
            </div>
          </div>
        );
      }
}

export default App;


