const changeUnits = document.querySelector('.change-units-slider')
const imperialUnits = document.querySelectorAll('.fahrenheit')
const celsius = document.getElementById('celsius');
const fahrenheit = document.getElementById('fahrenheit');
const input = document.querySelector('.input-city')
import {
    getCoordinates,
    getWeatherCelsius
} from "./getdata";


function parse(data) {
    return Number.parseFloat(data).toFixed(2);
}

// function getCelsius(num) {
//     let celsius = ((num - 32) / 1.8).toFixed(1);
//     return celsius
// }

// function getFahrenheit(num) {
//     let fahrenheit = ((9 / 5) * num + 32).toFixed(1);
//     return fahrenheit;
// }


function changeUnitsSlider() {
    if (changeUnits.value == 2) {
        changeUnits.style.backgroundColor = "#fcbf49";
        getWeatherCelsius(input.value)
    } else {
        getCoordinates(input.value);
    }
}







changeUnits.addEventListener('click', changeUnitsSlider)
export {
    parse,
};