import { combineReducers } from 'redux';
import {
  locationReducer,
  weatherReducer,
  nearbyRestaurantsReducer,
} from './reducers';

const rootReducer = combineReducers({
  location: locationReducer,
  weather: weatherReducer,
  nearbyRestaurants: nearbyRestaurantsReducer
});

export default rootReducer;