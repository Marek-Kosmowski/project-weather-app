import {
    Coordinates,
    getCityCoordinates
} from "./getcoordinates";
const location = 'Warsaw'
const input = document.querySelector('.input-city')
async function getForecast() {
    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=a7866bf01afc625f8d88f4c3b82439d0`;
        // 
        const response = await fetch(url);
        const dataRes = await response.json();
        console.log(dataRes)
        // const currentTemp = dataRes.main.temp;
        // console.log(dataRes.name);
        // console.log(`Current temperature in ${dataRes.name} is: ${getInteger(currentTemp)}`);
    } catch (err) {
        console.log('something went wrong', err)
    }
}

function getInteger(num) {
    return Math.floor(num)
}


// input.addEventListener('keydown', (e) => {
//     if (e.key === 'Enter') {
//         getCityCoordinates()

//     }
// })

export default getForecast;