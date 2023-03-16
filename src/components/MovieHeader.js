import React from 'react';
import { Link } from 'react-router-dom';
//1 give this comp access to the data from the movieReducer
import {connect} from 'react-redux';

const MovieHeader = (props) => {
    // 4
    // const appTitle = "";
    const { appTitle } = props;

    const displayFavorites = true;
    
    return(<div className="table-title">
        <div className="row">
        <div className="col-sm-6">
            <h2>{appTitle}</h2>
        </div>
        <div className="col-sm-6 headerBar">
            <div className="btn btn-sm btn-primary"><span>{ displayFavorites ? "Hide" : "Show"} Favorites</span></div>
            <Link to="/movies" className="btn btn-sm btn-primary">View All Movies</Link>
            <Link to="/movies/add" className="btn btn-sm btn-success"><i className="material-icons">&#xE147;</i> <span>Add New Movie</span></Link>
        </div>
        </div>
    </div>);
}

//3
//5 test 1-4 by checking UI
function mapStateToProps(state){
    return{
        appTitle: state.appTitle
    }
 }


//2 give data to props in this component
export default connect(mapStateToProps)(MovieHeader);