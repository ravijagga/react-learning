import ACTION_TYPES from '../actions/action-types';

export function locationReducer(state = null, action) {
  switch (action.type) {
  case ACTION_TYPES.GET_LOCATION:
    return action.payload;
  default:
    return state;
  }
}

export function weatherReducer(state = null, action) {
  switch (action.type) {
  case ACTION_TYPES.GET_WEATHER:
    return action.payload;
  default:
    return state;
  }
}

export function nearbyRestaurantsReducer(state = null, action) {
  switch (action.type) {
  case ACTION_TYPES.GET_NEARBY_RESTAURANTS:
    return action.payload;
  default:
    return state;
  }
}