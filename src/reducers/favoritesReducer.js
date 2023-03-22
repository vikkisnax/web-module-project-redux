import {TOGGLE_FAVORITES, ADD_FAVORITE, REMOVE_FAVORITE} from './../actions/favoritesActions'

const initialState = {
    // test -- 
    // favorites: [{title: "Movie", id:1}], 
    favorites: [], 
    displayFavorites: true
}

//reducer
const favoritesReducer = (state = initialState, action) => {
    switch(action.type){
        //b2 build out favorites actions. return are the changes to state
        case(TOGGLE_FAVORITES): {
            return{
                ...state,
                displayFavorites: !state.displayFavorites
            }
        }
        case(ADD_FAVORITE): {
            //c
            // console.log('reducer:', action)
            return{
                ...state,
                favorites: [...state.favorites, action.payload]
            }
        }
        case(REMOVE_FAVORITE):{
            return{
                ...state,
                favorites: state.favorites.filter(item=>(item.id != action.payload))
            }
        }
        default:
            return (state);
    }
}

export default favoritesReducer;