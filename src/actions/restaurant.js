import ACTION_TYPES from './action-types';

const google = window.google;

export function getNearbyRestaurants(lat, lon, mapRef) {
  if (!lat || !lon) throw new Error('Location not provided?');
  if (!mapRef) throw new Error('mapRef not provided?');

  const currLocation = new google.maps.LatLng(lat, lon);
  const map = new google.maps.Map(mapRef, {
    zoom: 12,
    center: currLocation
  });

  let placesService = new google.maps.places.PlacesService(map);

  const request = {
    location: currLocation,
    rankBy: google.maps.places.RankBy.DISTANCE,
    type: ['restaurant']
  };

  let nearbyRestaurants = new Promise((resolve, rejects) => {
    placesService.nearbySearch(request, (results, status) => {
      if (status == google.maps.places.PlacesServiceStatus.OK) {
        resolve(results);
      }
    });
  });

  return {
    type: ACTION_TYPES.GET_NEARBY_RESTAURANTS,
    payload: nearbyRestaurants
  };
}