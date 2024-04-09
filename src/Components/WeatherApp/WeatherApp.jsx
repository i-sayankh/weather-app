import React from 'react'
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
  return (
    <div className='container'>
        <div className="top-bar">
            <input type="text" className="cityInput" placeholder='Search'/>
            <div className="search-icon">
                <img src={search_icon} alt="" />
            </div>
        </div>
        <div className="weather-image">
            <img src={cloud_icon} alt="" />
        </div>
        <div className="weather-temp">34°c</div>
        <div className="weather-location">Kolkata</div>
        <div className="data-container">

            <div className="element">
                <img src={humidity_icon} alt="" className="icon" />
                <div className="data">
                    <div className="humidity-percentage">69%</div>
                    <div className="text">Humidity</div>
                </div>
            </div>

            <div className="element">
                <img src={wind_icon} alt="" className="icon" />
                <div className="data">
                    <div className="humidity-percentage">300,000 km/sec</div>
                    <div className="text">Wind Speed</div>
                </div>
            </div>
            
        </div>
    </div>
  )
}
