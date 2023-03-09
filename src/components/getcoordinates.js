const input = document.querySelector('.input-city');

function Coordinates(latitude, longitude) {
    this.latitude = latitude;
    this.longitude = longitude
}

async function getCityCoordinates() {
    try {
        const url = `http://api.openweathermap.org/geo/1.0/direct?q=${input.value},&limit=1&appid=a7866bf01afc625f8d88f4c3b82439d0`

        const response = await fetch(url);
        const dataRes = await response.json()
        const latCoordinates = dataRes[0].lat
        const lonCoordinates = dataRes[0].lon
        // console.log(parse(latCoordinates), parse(lonCoordinates))
        const newCoordinates = new Coordinates(parse(latCoordinates), parse(lonCoordinates));
        return newCoordinates

    } catch (err) {
        alert('Something went wrong!')
        console.log(err)
    }

}

function parse(data) {
    return Number.parseFloat(data).toFixed(2);
}

// input.addEventListener('keydown', (e) => {
//     if (e.key === 'Enter') {
//         getCityCoordinates();
//         input.value = '';
//     }
// })

export {
    getCityCoordinates,
    Coordinates
};