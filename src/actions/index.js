import axios from 'axios';

const API_KEY = '72199ca3fcddc302432b1284e53b473e';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city}`;
    const request = axios.get(url).then(res => {
        return res;
    }).catch(err => {return err});
    
    return {
        type: FETCH_WEATHER,
        payload: request,
    };
};