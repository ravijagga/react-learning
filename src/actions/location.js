import ACTION_TYPES from './action-types';

export function getLocation() {
  const geoLocation = navigator.geolocation;

  const location = new Promise((resolve, reject) => {
    // Check whether geoLocation service is available
    if (!geoLocation) {
      reject(new Error('geolocation not supported by your browser!'));
    }

    // Get User Location (geoLocation)
    geoLocation.getCurrentPosition(position => {
      resolve(position);
    }, err => {
      reject(new Error('Permission Denied!'));
    });
  });

  return {
    type: ACTION_TYPES.GET_LOCATION,
    payload: location
  };
}