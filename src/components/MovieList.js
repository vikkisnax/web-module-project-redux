import React from 'react';
//1 give this comp access to the data from the movieReducer
import {connect} from 'react-redux';
import MovieListItem from './MovieListItem';
import MovieFooter from './MovieFooter';


const MovieList = (props)=> {
    //4
    // const movies = []; delete or change it to const {movies}=props aka destructured, so you don't have to type it below. now movies are appearing on UI
    const { movies } = props;

    return (
        <div className="col">
            <table className="table table-striped table-hover">
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Director</th>
                    <th>Genre</th>
                    <th>Metascore</th>
                    <th></th>
                </tr>
                </thead>

                <tbody>
                    {
                    movies.map(movie => 
                        <MovieListItem 
                            key={movie.id} 
                            movie={movie}
                        />)
                    }
                </tbody>
            </table>
            
            <MovieFooter totalMovies={movies.length}/>
        </div>
    );
}

//3. now movies is inside of our props above. movies we get are the ones that are passed in to our state
//5 test 1-4 by checking UI
function mapStateToProps(state){
    return{
        movies: state.movies
    }
 }

//2 give data to props in this component
export default connect(mapStateToProps)(MovieList);