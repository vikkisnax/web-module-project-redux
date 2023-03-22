//remember: Actions tell our reducers "how" to update the state, and perhaps with what data it should be updated

//action type 
export const DELETE_MOVIE = "DELETE_MOVIE";
export const ADD_MOVIE = "ADD_MOVIE";

//action creators - funct that creates & returns an action obj
export const deleteMovie = (id) => {
    return({
        //action (obj)
        type: DELETE_MOVIE, 
        payload:id
    });
}

export const addMovie = (movie) => {
    //return action object \/
    return({type:ADD_MOVIE, payload:movie})
} 