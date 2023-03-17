//action type 
export const DELETE_MOVIE = "DELETE_MOVIE";

//action creator - funct that creates & returns an action obj
export const deleteMovie = (id) => {
    return({
        //action (obj)
        type: DELETE_MOVIE, 
        payload:id
    });
}