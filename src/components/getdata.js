// a7866bf01afc625f8d88f4c3b82439d0 -api key



// async function findGif() {
//     try {
//         let value = input.value;
//         let searchUrl = `https://api.giphy.com/v1/gifs/search?q=${value}&api_key=YqvV0fHXSVqa2NO9r8t0tp1ziLXfZtKI&limit=1`;
//         const response = await fetch(searchUrl);
//         const dataRes = await response.json();
//         img.src = dataRes.data[0].images.original.url;
//         console.log(dataRes)
//     } catch (err) {
//         alert('Something went wrong!')
//         console.log(err)
//     }

// }

async function getCity() {
    try {
        const url = 'http://api.openweathermap.org/geo/1.0/direct?q=warsaw,&limit=1&appid=a7866bf01afc625f8d88f4c3b82439d0'

        const response = await fetch(url);
        const dataRes = await response.json()
        console.log(Math.floor(dataRes[0].lon), Math.floor(dataRes[0].lat))


    } catch (err) {
        alert('Something went wrong!')
        console.log(err)
    }


}

getCity()