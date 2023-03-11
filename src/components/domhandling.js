const cityTitle = document.querySelector('.city-title');
const cityTemperature = document.querySelector('.info-data-temp');
const cityTempMin = document.querySelector('.info-data-min');
const cityTempMax = document.querySelector('.info-data-max');
const cityTempFeels = document.querySelector('.info-data-feels');
const cityHumidity = document.querySelector('.info-data-hum');
const cityPressure = document.querySelector('.info-data-press');


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
    insertInfoFahrenheit() {
        cityTitle.innerHTML = this.cityName;
        cityTemperature.innerHTML = `${this.cityTemp}°F`;
        cityTempMin.innerHTML = `${this.cityTempMin}°F`;
        cityTempMax.innerHTML = `${this.cityTempMax}°F`;
        cityTempFeels.innerHTML = `${this.cityTempFeels}°F`;
        cityHumidity.innerHTML = `${this.cityHumidity}%`;
        cityPressure.innerHTML = `${this.cityPressure}hPa`;
    }

}


export default WeatherInfo;