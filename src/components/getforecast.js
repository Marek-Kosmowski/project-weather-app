async function getForecast() {
    try {
        const url = 'https://api.openweathermap.org/data/2.5/weather?lat=52.23&lon=21.07&units=metric&appid=a7866bf01afc625f8d88f4c3b82439d0';
        const response = await fetch(url);
        const dataRes = await response.json();
        const currentTemp = dataRes.main.temp;
        console.log(dataRes.name);
        console.log(`Current temperature in ${dataRes.name} is: ${getInteger(currentTemp)}`);
    } catch (err) {
        console.log('something went wrong', err)
    }
}

export default getForecast;