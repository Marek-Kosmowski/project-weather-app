async function getCityCoordinates() {
    try {
        const url = 'http://api.openweathermap.org/geo/1.0/direct?q=warsaw,&limit=1&appid=a7866bf01afc625f8d88f4c3b82439d0'

        const response = await fetch(url);
        const dataRes = await response.json()
        const latCoordinates = dataRes[0].lat
        const lonCoordinates = dataRes[0].lon
        console.log(parse(latCoordinates), parse(lonCoordinates))


    } catch (err) {
        alert('Something went wrong!')
        console.log(err)
    }

}

function parse(data) {
    return Number.parseFloat(data).toFixed(2);
}


export default getCityCoordinates;