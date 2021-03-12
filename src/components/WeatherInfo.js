import React from "react";
import "./WeatherInfo.scss";

function WeatherInfo({date, mintemp, maxtemp, condition, icon}) {
  
  let dateDay = new Date(date);

   
  return <div className="weather-card">
        <img className="weather-icon" src={icon} alt={condition} />
        <span>{condition}</span>
        <h3>Min: {mintemp}°C Max: {maxtemp}°C</h3>
        <p>{dateDay.getDay() === 0 ? 'Sunday' : dateDay.getDay() === 1 ? 'Monday' : dateDay.getDay() === 2 ? 'Tuesday' : dateDay.getDay() === 3 ? 'Wednesday' : dateDay.getDay() === 4 ? 'Thursday' : dateDay.getDay() === 5 ? 'Friday' : 'Saturday'}</p>
    </div>;
}
export default WeatherInfo;
