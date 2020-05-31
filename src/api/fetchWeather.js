import axios from "axios";

const URL = "https://free-api.heweather.net/s6/weather";
const API_KEY = "e974a4265f5b48ab9b760dfab6614854";

export default async function FetchWeather(location) {
  const { data } = await axios.get(URL, {
    params: {
      location: location,
      key: API_KEY,
    },
  });
  return data;
}
