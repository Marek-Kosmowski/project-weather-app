async function getForecast(coord) {
    const forecastUrl = `https://api.openweathermap.org/data/2.5/weather?${coord}&appid=a7866bf01afc625f8d88f4c3b82439d0`
    const getData = await fetch(forecastUrl);
    const respJson = await getData.json();
    console.log(respJson);

}

export default getForecast;