//make note of what you're using here and where. we were using 'movies' in another file so fix it to what you changed it to
import { combineReducers } from 'redux';

import movieReducer from './movieReducer';
import favoritesReducer from './favoritesReducer';

const rootReducer= combineReducers({
    movieReducer,
    favoritesReducer
})


export default rootReducer;