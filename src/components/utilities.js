const changeUnits = document.querySelector('.change-units-slider')

const imperialUnits = document.querySelectorAll('.fahrenheit')

function parse(data) {
    return Number.parseFloat(data).toFixed(2);
}

function getCelsius(num) {
    let celsius = ((num - 32) / 1.8).toFixed(1);
    return celsius
}

function getFahrenheit(num) {
    let fahrenheit = ((9 / 5) * num + 32).toFixed(1);
    return fahrenheit;
}



function changeUnitsSlider() {
    if (changeUnits.value == 2) {
        changeUnits.style.backgroundColor = "#fcbf49";
        imperialUnits.forEach(el => {
            el.innerHTML = `${getCelsius(parseInt(el.innerHTML))}°C`
        })
    } else {
        changeUnits.style.backgroundColor = "white"
        imperialUnits.forEach(el => {
            el.innerHTML = `${getFahrenheit(parseInt(el.innerHTML))}°F`
        })
    }

}





changeUnits.addEventListener('click', changeUnitsSlider)
export {
    parse,
    getCelsius,
    getFahrenheit,
    changeUnitsSlider
};