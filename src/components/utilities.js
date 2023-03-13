const changeUnits = document.querySelector('.change-units-slider')
const input = document.querySelector('.input-city')
import {
    getCoordinates,
    getWeatherCelsius
} from "./getdata";


function parse(data) {
    return Number.parseFloat(data).toFixed(2);
}


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