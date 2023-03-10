const input = document.querySelector('.input-city');
import getForecast from "./getforecast";

async function getCoordinates(data) {
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${data}&limit=1&appid=a7866bf01afc625f8d88f4c3b82439d0`
    const getData = await fetch(url);
    const dataJson = await getData.json();
    const lat = dataJson[0].lat
    const lon = dataJson[0].lon
    console.log(parseNum(lat), parseNum(lon));
    const coord = `lat=${parseNum(lat)}&lon=${parseNum(lon)}`;
    getForecast(coord)
}




function parseNum(num) {
    return Number.parseFloat(num).toFixed(2)
}

input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        getCoordinates(input.value)
    }
})