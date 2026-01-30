let input = document.querySelector("input");
let btn = document.querySelector("button");
let img = document.querySelector(".day");
let temp = document.querySelector(".temperature");
let description = document.querySelector(".description");
let humidity = document.querySelector("#humidity");
let speed = document.querySelector("#speed");
let err = document.querySelector("#error");
let weatherBody = document.querySelector(".weatherBody");

async function weatherCheck(city){
    let api = "18ffbb2e9c409906e4f3b988805874fe";
    let url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}`);
    let weatherdata = await url.json();
    if(weatherdata.cod === `404`){
        err.style.display = "flex";
        weatherBody.style.display = "none";
        return ;
    }
    weatherBody.style.display = "flex";
    temp.innerText = `${Math.round(weatherdata.main.temp - 273.15)}°C`;//.main.temp का मतलब है OpenWeather API के JSON response में temperature की value
    description.innerText = `${weatherdata.weather[0].description}`;
    humidity.innerText = `${weatherdata.main.humidity}%`;
    speed.innerText = `${weatherdata.wind.speed}m/s`;

    switch(weatherdata.weather[0].main){
        case "Clouds":
            img.src = "cloud.png";
            break;
        case "Clear":
            img.src = "sun.png";
            break;
        case "Rain":
            img.src = "rain.png";
            break;
        case "Snow":
            img.src = "snow.png";
            break;
        case "Fog":
            img.src = "fog.png";
            break;
        case "Mist":
            img.src = "mist.png";
            break;        
        case "Haze":
            img.src = "haze.png";
            break;    
        } 

}

btn.addEventListener("click",()=>{
    weatherCheck(input.value);
})
