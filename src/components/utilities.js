function parse(data) {
    return Number.parseFloat(data).toFixed(2);
}

function getCelsius(num) {
    let celsius = (num - 32) / 1.8;
    return celsius;
}

function getFahrenheit(num) {
    let fahrenheit = (9 / 5) * num + 32;
    return fahrenheit;
}


export {
    parse,
    getCelsius,
    getFahrenheit
};