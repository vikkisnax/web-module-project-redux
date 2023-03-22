import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
//1
import {connect} from 'react-redux';
//a1
import {deleteMovie} from '../actions/movieActions';
//c
import { addFavorite } from '../actions/favoritesActions';

const Movie = (props) => {
    const { id } = useParams();
    const { push } = useHistory();

    //4
    // const movies = []; - delete and write the destructured code below. Now Movie component has access to the movies list. Movie shows 1 movie.
    //a4 delteMovie is inside of props so deconstruct it so you don't have to write props.deleteMovie
    // b1 displayfav -- so we can access these
    // c
    const { movies, deleteMovie, displayFavorites, addFavorite } = props;
    
    //movies is used below. will be explained next class. displays movie by id
    const movie = movies.find(movie=>movie.id===Number(id));
    
    //a5 delete button is inside here/movie component ^. so pass in a movie id
   const handleDeleteClick = () => {
    deleteMovie(movie.id);
    //a6 redirect. 'push' from useHistory
    push('/movies');
   }


   //c
   const handleFavoriteClick = () => {
        //movie has all data. making a copy of the data
        addFavorite(movie);
   }

    return(<div className="modal-page col">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">						
                    <h4 className="modal-title">{movie.title} Details</h4>
                </div>
                <div className="modal-body">
                    <div className="flexContainer">

                        <section className="movie-details">
                            <div>
                                <label>Title: <strong>{movie.title}</strong></label>
                            </div>
                            <div>
                                <label>Director: <strong>{movie.director}</strong></label>
                            </div>
                            <div>
                                <label>Genre: <strong>{movie.genre}</strong></label>
                            </div>
                            <div>
                                <label>Metascore: <strong>{movie.metascore}</strong></label>
                            </div>
                            <div>
                                <label>Description:</label>
                                <p><strong>{movie.description}</strong></p>
                            </div>
                        </section>
                        
                        <section>
                            {/* b2 */}
                            {displayFavorites && 
                                <span 
                                    className="m-2 btn btn-dark"
                                    // c
                                    onClick={handleFavoriteClick}
                                >Favorite</span> }
                            <span 
                                className="delete"
                                //a4
                                onClick={handleDeleteClick}
                            >
                                <input 
                                    type="button" 
                                    className="m-2 btn btn-danger" 
                                    value={"Delete"}
                                />
                            </span>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}

//3
//5 test 1-4 by checking UI
//b building out fav reducer in index.js: just combined reducers. now fix where we referenced it. connect reducer to comp
function mapStateToProps(state){
    return({
        movies: state.movieReducer.movies,
        displayFavorites: state.favoritesReducer.displayFavorites
    })
}


//2 //a2 connect action {deleteMovie} //c handleFavClick
export default connect(mapStateToProps, {deleteMovie, addFavorite})(Movie);