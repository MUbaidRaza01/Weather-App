const inputBox = document.querySelector(".input-box");
const searchBtn = document.getElementById("searchBtn");
const weatherImg = document.querySelector(".weather-image");
const temperature = document.querySelector(".temperature");
const description = document.querySelector(".description");
const humidity = document.getElementById("humidity");
const wind_speed = document.getElementById("wind-speed");
const location_not_found = document.querySelector(".location-not-found");
const weather_body = document.querySelector(".weather-body");


async function checkWeather(city){
    const api_key = "2ce2b7410874ed8d8ec3e5058119516d";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_date = await fetch(`${url}`).then(response => response.json());

    if(weather_date.cod === `404`){
        location_not_found.style.display = "flex";
        weather_body.style.display = "none";
        return;
    }
    location_not_found.style.display = "none";
    weather_body.style.display = "flex";
    temperature.innerHTML = `${Math.round(weather_date.main.temp - 273.15)}°C`;
    description.innerHTML = `${weather_date.weather[0].description}`;
    humidity.innerHTML = `${weather_date.main.humidity}%`;
    wind_speed.innerHTML = `${weather_date.wind.speed}Km/H`;

    switch(weather_date.weather[0].main){
        case 'Clouds':
            weatherImg.src = "images/cloud.png"
            break;
        case 'Clear':
            weatherImg.src = "images/clear.png"
             break;
        case 'Rain':
            weatherImg.src = "images/rain.png"
             break;
        case 'Mist':
            weatherImg.src = "images/mist.png"
             break;
        case 'Snow':
            weatherImg.src = "images/snow.png"
             break;
    }
 
}



searchBtn.addEventListener("click", ()=>{
    checkWeather(inputBox.value);
});