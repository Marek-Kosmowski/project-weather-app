// a7866bf01afc625f8d88f4c3b82439d0 - api id

// http://api.openweathermap.org/geo/1.0/direct?q=Warsaw&limit=1&appid=a7866bf01afc625f8d88f4c3b82439d0;

// http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid={API key}

// https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=a7866bf01afc625f8d88f4c3b82439d0

async function getCoordinates(coord) {
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=Warsaw&limit=1&appid=a7866bf01afc625f8d88f4c3b82439d0`
    const getData = await fetch(url);
    const dataJson = await getData.json();
    const lat = dataJson[0].lat
    const lon = dataJson[0].lon
    console.log(parseNum(lat), parseNum(lon));
    coord = ``

}
getcoordinates()

function parseNum(num) {
    return Number.parseFloat(num).toFixed(2)
}