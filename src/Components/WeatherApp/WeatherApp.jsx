import React, { useState } from 'react'
import './WeatherApp.css';

import clear_icon from "../Assets/clear.png";
import cloud_icon from "../Assets/cloud.png";
import drizzle_icon from "../Assets/drizzle.png";
import humidity_icon from "../Assets/humidity.png";
import rain_icon from "../Assets/rain.png"
import search_icon from "../Assets/search.png";
import snow_icon from "../Assets/snow.png";
import wind_icon from "../Assets/wind.png";

export const WeatherApp = () => {

    let api_key = "c0b860063a2c81d640d0409f3aeee13b";
    const [wicon, setWicon] = useState(cloud_icon);

    const search = async () => {
        
        const city = document.getElementsByClassName("cityInput")[0].value;
        const warning = document.querySelector('.warning');

        if(city === "") {
            warning.innerText = 'Please enter a city';
            warning.style.display = 'block';
        } else {
            warning.style.display = 'none';

            let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=Metric&appid=${api_key}`;

            try {
                let response = await fetch(url);
                if(!response.ok) throw new Error("City Not Found!!!");

                let data = await response.json();

                const humidity = document.getElementsByClassName("humidity-percentage")[0];
                const wind = document.getElementsByClassName("wind-speed")[0];
                const temperature = document.getElementsByClassName("weather-temp")[0];
                const location = document.getElementsByClassName("weather-location")[0];

                humidity.innerHTML = data.main.humidity + " %";
                wind.innerHTML = Math.floor(data.wind.speed) + " KM/Hour";
                temperature.innerHTML = Math.floor(data.main.temp) + "°c";
                location.innerHTML = data.name;

                if(data.weather[0].icon === "01d" || data.weather[0].icon === "01n") {
                    setWicon(clear_icon);
                } else if (data.weather[0].icon === "02d" || data.weather[0].icon === "02n") {
                    setWicon(cloud_icon);
                } else if(data.weather[0].icon === "03d" || data.weather[0].icon === "03n") {
                    setWicon(drizzle_icon);
                } else if(data.weather[0].icon === "04d" || data.weather[0].icon === "04n") {
                    setWicon(drizzle_icon);
                } else if(data.weather[0].icon === "09d" || data.weather[0].icon === "09n") {
                    setWicon(rain_icon);
                } else if(data.weather[0].icon === "10d" || data.weather[0].icon === "10n") {
                    setWicon(rain_icon);
                } else if(data.weather[0].icon === "13d" || data.weather[0].icon === "13n") {
                    setWicon(snow_icon);
                } else {
                    setWicon(clear_icon);
                }
            } catch(error) {
                warning.innerText = 'Invalid City Name!!! Failed to load Weather Information!!!';
                warning.style.display = 'block';
            }
        }
    }

    return (
        <div className='container'>
            <div className="top-bar">
                <input type="text" className="cityInput" placeholder='Search' required/>
                <div className="search-icon" onClick={()=>{search()}}>
                    <img src={search_icon} alt="" />
                </div>
            </div>
            <span className="warning" style={{ display: 'none' }}></span>
            <div className="weather-image">
                <img src={wicon} alt="" />
            </div>
            <div className="weather-temp">34°c</div>
            <div className="weather-location">Kolkata</div>
            <div className="data-container">

                <div className="element">
                    <img src={humidity_icon} alt="" className="icon" />
                    <div className="data">
                        <div className="humidity-percentage">50%</div>
                        <div className="text">Humidity</div>
                    </div>
                </div>

                <div className="element">
                    <img src={wind_icon} alt="" className="icon" />
                    <div className="data">
                        <div className="wind-speed">5 km/sec</div>
                        <div className="text">Wind Speed</div>
                    </div>
                </div>

            </div>
        </div>
    )
}
