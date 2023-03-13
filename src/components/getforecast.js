import WeatherInfo from "./domhandling";



async function getForecast(coord) {
    const forecastUrl = `https://api.openweathermap.org/data/2.5/weather?${coord}&units=imperial&appid=a7866bf01afc625f8d88f4c3b82439d0`
    const getData = await fetch(forecastUrl);
    const respJson = await getData.json();
    console.log(respJson);
    const insertData = new WeatherInfo(respJson.name, respJson.main.temp, respJson.main.temp_min, respJson.main.temp_max, respJson.main.feels_like, respJson.main.humidity, respJson.main.pressure)
    return insertData.insertInfoFahrenheit();
}
async function getForecastCelsius(coord) {
    const forecastUrl = `https://api.openweathermap.org/data/2.5/weather?${coord}&units=metric&appid=a7866bf01afc625f8d88f4c3b82439d0`
    const getData = await fetch(forecastUrl);
    const respJson = await getData.json();
    console.log(respJson);
    const insertData = new WeatherInfo(respJson.name, respJson.main.temp, respJson.main.temp_min, respJson.main.temp_max, respJson.main.feels_like, respJson.main.humidity, respJson.main.pressure)
    return insertData.insertInfoCelsius();
}



export {
    getForecast,
    getForecastCelsius
};