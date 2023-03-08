async function getCityCoordinates() {
    try {
        const url = 'http://api.openweathermap.org/geo/1.0/direct?q=warsaw,&limit=1&appid=a7866bf01afc625f8d88f4c3b82439d0'

        const response = await fetch(url);
        const dataRes = await response.json()
        const latCoordinates = dataRes[0].lat
        const lonCoordinates = dataRes[0].lon
        console.log(parse(latCoordinates), parse(lonCoordinates))


    } catch (err) {
        alert('Something went wrong!')
        console.log(err)
    }

}

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

function parse(data) {
    return Number.parseFloat(data).toFixed(2);
}

function getInteger(num) {
    return Math.floor(num)
}
getCityCoordinates()
getForecast();