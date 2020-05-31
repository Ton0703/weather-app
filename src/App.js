import React, { useCallback, useState, useEffect } from "react";
import fetchWeather from "./api/fetchWeather";
import "./App.scss";
import Header from "./components/Header";
import WeatherInfo from "./components/WeatherInfo";
import Forecast from "./components/Forecast";
import Loading from "./components/Loading";
import Info from "./components/Info";

function App() {
  const [location, setLocation] = useState("");
  const [weather, setWeather] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const storage = localStorage.getItem("WeatherLocation");
    if (storage) {
      setLocation(storage);
    } else {
      setLocation("北京");
    }
  }, []);

  useEffect(() => {
    setTimeout(() => fetchData(), 100);
  }, [location]);

  const fetchData = useCallback(async () => {
    const data = await fetchWeather(location);
    setWeather({ ...data.HeWeather6[0] });
    setLoading(false);
    if (data.HeWeather6[0].basic)
      localStorage.setItem(
        "WeatherLocation",
        data.HeWeather6[0].basic.location
      );
  }, [location]);

  return (
    <div className="App">
      <Header
        location={weather.basic ? weather.basic.location : location}
        set={setLocation}
        loading={loading}
        setLoading={setLoading}
      />
      {weather.now ? <WeatherInfo data={weather.now} /> : <Loading />}
      {weather.daily_forecast && <Forecast data={weather.daily_forecast} />}
      <Info />
    </div>
  );
}

export default App;
