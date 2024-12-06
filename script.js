const url = 'https://api.openweathermap.org/data/2.5/'
const key = '0fa8f88b7cd80b4f6c331a1cc4611590'

const Query = (e) => {
    if(e.keyCode === 13){
        getResult(cityInput.value) ;
    }
}

const getResult = (cityName) => {
    let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`
    fetch(query)
    .then(weather => {
        return weather.json()
    })
    .then(displayResult)
}

const displayResult = (result) => {
    let city = document.getElementById('city') ;
    city.innerHTML = `${result.name}, ${result.sys.country}` ;

    let temp = document.getElementById('temp') ;
    temp.innerHTML = `${Math.round(result.main.temp)}°C` ;

    let description = document.getElementById('description') ;
    description.innerHTML = result.weather[0].description ;

    let minmax = document.getElementById('min-max') ;
    minmax.innerHTML = `Min: ${Math.round(result.main.temp_min)}°C, Max: ${Math.round(result.main.temp_max)}°C` ;
}

const cityInput = document.getElementById('city-input') ;
cityInput.addEventListener('keypress' , Query) ;