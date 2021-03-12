import { useEffect, useState } from "react";
import "./App.scss";
import WeatherInfo from "./components/WeatherInfo";

function App() {
  const [location, setLocation] = useState("Bursa");
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});

  const params = {
    key: "a0d6503bbed8451c8f4173955211103",
    location,
  };

  useEffect(() => {
    fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=${params.key}&q=${params.location}&days=3`
    )
      .then((response) => response.json())
      .then((data) => setWeather(data));
  }, [location]);

  return (
    <>
      <div className="header">
        <h1>
          3 Days Weather Information for{" "}
          {weather.location ? weather.location.name : "nothing"}
        </h1>
      </div>
      <div className="App">
        <div className="search">
          <input
            onKeyDown={(event) =>
              event.keyCode === 13 ? setLocation(city) : null
            }
            onChange={(event) => setCity(event.target.value)}
            type="text"
            placeholder="Search for a city"
          />
          <button className="search-button" onClick={() => setLocation(city)}>
            Search
          </button>
        </div>
        <div className="weather-wrapper">
          {weather.current ? (
            weather.forecast.forecastday.map((item) => (
              <WeatherInfo
                weather={weather}
                date={item.date}
                condition={item.day.condition.text}
                icon={item.day.condition.icon}
                mintemp={item.day.mintemp_c}
                maxtemp={item.day.maxtemp_c}
              />
            ))
          ) : (
            <span className="error">Please check city name!</span>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
