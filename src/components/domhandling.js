const cityTitle = document.querySelector('.city-title');
const cityTemperature = document.querySelector('.city-temperature');
const cityTempMin = document.querySelector('.city-temp-min');
const cityTempMax = document.querySelector('.city-temp-max');
const cityTempFeels = document.querySelector('.city-temp-feels');
const cityHumidity = document.querySelector('.city-humidity');
const cityPressure = document.querySelector('.city-pressure');


class WeatherInfo {
    constructor(cityName, cityTemp, cityTempMin, cityTempMax, cityTempFeels, cityHumidity, cityPressure) {
        this.cityName = cityName;
        this.cityTemp = cityTemp;
        this.cityTempMin = cityTempMin;
        this.cityTempMax = cityTempMax;
        this.cityTempFeels = cityTempFeels;
        this.cityHumidity = cityHumidity;
        this.cityPressure = cityPressure;
    }

    //method
    insertInfo() {
        cityTitle.innerHTML = this.cityName;
        cityTemperature.innerHTML = `this.cityTemp;`
        cityTempMin.innerHTML = `this.cityTempMin`;
        cityTempMax.innerHTML = `this.cityTempMax`;
        cityTempFeels.innerHTML = ` this.cityTempFeels`;
        cityHumidity.innerHTML = `this.cityHumidity`;
        cityPressure.innerHTML = `this.cityPressure`;
    }
}


export default WeatherInfo;

// function testing() {
//     cityTitle.innerHTML = 'LIRK'
// }

// export default testing;