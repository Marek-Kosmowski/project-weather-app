import {
    getForecast,
    getForecastCelsius,
} from "./getforecast";
import parseNum from "./utilities";

async function getCoordinates(data) {
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${data}&limit=1&appid=a7866bf01afc625f8d88f4c3b82439d0`
    const getData = await fetch(url);
    const dataJson = await getData.json();
    const lat = dataJson[0].lat
    const lon = dataJson[0].lon
    const coord = `lat=${parseNum(lat)}&lon=${parseNum(lon)}`;
    getForecast(coord)
}

async function getWeatherCelsius(data) {
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${data}&limit=1&appid=a7866bf01afc625f8d88f4c3b82439d0`
    const getData = await fetch(url);
    const dataJson = await getData.json();
    const lat = dataJson[0].lat
    const lon = dataJson[0].lon
    const coord = `lat=${parseNum(lat)}&lon=${parseNum(lon)}`;
    getForecastCelsius(coord)
}

export {
    getCoordinates,
    getWeatherCelsius,
};