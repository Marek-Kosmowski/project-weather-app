const changeUnitsSlider = document.querySelector('.change-units-slider')
const input = document.querySelector('.input-city')
import {
    getCoordinates,
    getWeatherCelsius
} from "./getdata";


function parseNum(num) {
    return Number.parseFloat(num).toFixed(2)
}

input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        getCoordinates(input.value)
        changeUnitsSlider.value = 1;
        changeUnitsSlider.style.backgroundColor = "white";
    }
})


function changeUnits() {
    if (changeUnitsSlider.value == 2) {
        changeUnitsSlider.style.backgroundColor = "#fcbf49";
        getWeatherCelsius(input.value)
    } else {
        getCoordinates(input.value);
    }
}

changeUnitsSlider.addEventListener('click', changeUnits)
export default parseNum;