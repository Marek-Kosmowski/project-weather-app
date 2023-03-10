const input = document.querySelector('.input-city');


async function getCoordinates(data) {
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${data}&limit=1&appid=a7866bf01afc625f8d88f4c3b82439d0`
    const getData = await fetch(url);
    const dataJson = await getData.json();
    const lat = dataJson[0].lat
    const lon = dataJson[0].lon
    console.log(parseNum(lat), parseNum(lon));
    coord = `lat=${parseNum(lat)}&lon=${parseNum(lon)}`

    getForecast(coord)
}


async function getForecast(coord) {
    const forecastUrl = `https://api.openweathermap.org/data/2.5/weather?${coord}&appid=a7866bf01afc625f8d88f4c3b82439d0`
    const getData = await fetch(forecastUrl);
    const respJson = await getData.json();
    console.log(respJson);

}

function parseNum(num) {
    return Number.parseFloat(num).toFixed(2)
}

input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        getCoordinates(input.value)
    }
})