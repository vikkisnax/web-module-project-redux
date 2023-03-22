import React from 'react';
import { Link } from 'react-router-dom';
//1 give this comp access to the data from the movieReducer
import {connect} from 'react-redux';
//b2
import { toggleFavorites } from '../actions/favoritesActions';

const MovieHeader = (props) => {
    //4, b1, b2
    // const appTitle = "";
    // const displayFavorites = true;
   const { appTitle, displayFavorites, toggleFavorites } = props;
    
   //b2 link to our button. put it in onClick below
   const handleClick = () => {
    toggleFavorites()
   }

    return(<div className="table-title">
        <div className="row">
        <div className="col-sm-6">
            <h2>{appTitle}</h2>
        </div>
        <div className="col-sm-6 headerBar">
            <div className="btn btn-sm btn-primary" onClick={handleClick}><span>{ displayFavorites ? "Hide" : "Show"} Favorites</span></div>
            <Link to="/movies" className="btn btn-sm btn-primary">View All Movies</Link>
            <Link to="/movies/add" className="btn btn-sm btn-success"><i className="material-icons">&#xE147;</i> <span>Add New Movie</span></Link>
        </div>
        </div>
    </div>);
}

//3
//5 test 1-4 by checking UI
//b building out fav reducer in index.js: just combined reducers. now fix where we referenced it. connect reducer to comp
//b1
function mapStateToProps(state){
    return{
        appTitle: state.movieReducer.appTitle,
        displayFavorites: state.favoritesReducer.displayFavorites
    }
 }

//2 give data to props in this component
export default connect(mapStateToProps, {toggleFavorites})(MovieHeader);