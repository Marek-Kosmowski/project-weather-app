const changeUnits = document.querySelector('.change-units-slider')
const imperialUnits = document.querySelectorAll('.fahrenheit')
const celsius = document.getElementById('celsius');
const fahrenheit = document.getElementById('fahrenheit');

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


// function changeUnitsSlider() {
//     let isCelsius = false;
//     if (changeUnits.value == 1 && isCelsius == false) {
//         // changeUnits.style.backgroundColor = "#fcbf49";
//         // imperialUnits.forEach(el => {
//         //     el.innerHTML = `${getCelsius(parseInt(el.innerHTML))}°C`
//         // })

//         changeUnits.style.backgroundColor = "white"
//         imperialUnits.forEach(el => {
//             el.innerHTML = `${getFahrenheit(parseInt(el.innerHTML))}°F`
//         })
//         isCelsius = false
//         console.log(isCelsius)
//     } else {

//         changeUnits.style.backgroundColor = "#fcbf49";
//         imperialUnits.forEach(el => {
//             el.innerHTML = `${getCelsius(parseInt(el.innerHTML))}°C`
//         })
//         isCelsius = true;

//         // changeUnits.style.backgroundColor = "white"
//         // imperialUnits.forEach(el => {
//         //     el.innerHTML = `${getFahrenheit(parseInt(el.innerHTML))}°F`
//         // })
//         // isCelsius = true;

//     }

// }

celsius.addEventListener('click', (e)=>{
    console.log(e.target.value)
})
fahrenheit.addEventListener('click', (e)=>{
    console.log(e.target.value)
})


// changeUnits.addEventListener('click', changeUnitsSlider)
export {
    parse,
    getCelsius,
    getFahrenheit,
};