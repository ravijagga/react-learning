/**
 * Using OpenWeatherMap.org API
 */

import axios from 'axios';
import ACTION_TYPES from './action-types';

const API_KEY = 'ed4934df839b795c38330de31d425d51';

export function getWeather(lat, lon) {
  if (!lat && !lon) throw new Error('Lat & Lon not provided');

  const URL = `http://api.openweathermap.org/data/2.5/weather?` +
    `lat=${lat}&lon=${lon}&units=metric&APPID=${API_KEY}`;

  // Fetch weather
  const request = axios.get(URL);

  return {
    type: ACTION_TYPES.GET_WEATHER,
    payload: request
  };
}