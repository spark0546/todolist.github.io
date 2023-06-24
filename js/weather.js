function getSuccess(pos){
    const lat = pos.coords.latitude;
    const lon = pos.coords.longitude;
    const API_KEY = "06e65f61897a37b4fd8c172c7b41ad82";
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then((response) => response.json()).then((data) => {
        const city = data.name;
        const weather = data.weather[0].main;
        const temp = data.main.temp;
        const icon = data.weather[0].icon;
        document.querySelector('.city').innerText = city;
        document.querySelector('.current_weather').innerHTML = `, ${weather}, ${temp}&#x2103;`;
        document.querySelector('.weather').prepend()
        document.querySelector('.weather img').src = `http://openweathermap.org/img/w/${icon}.png`;
    })
    
}

function getError(){
    document.querySelector('.weather').innerHTML = "<span>Can't find your location 😯</span>";
}

navigator.geolocation.getCurrentPosition(getSuccess, getError);