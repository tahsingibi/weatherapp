import { useEffect } from "react";
import { useAll } from "./context/Context";

function Header() {
  const { input, setInput, city, setCity, setWeather } = useAll();

  const inputChange = e => setInput(e.target.value)
  const inputSubmit = e => {
    e.preventDefault()
    if (input && input !== city)setCity(input)
  };

  useEffect(() => {
    const key = process.env.REACT_APP_WEATHER_API;
    const apiurl = `https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&lang=tr&days=8&key=${key}`;
    fetch(apiurl)
      .then(r => r.json())
      .then(setWeather)
      .catch(error => alert("Veri Alınamadı"));
  }, [city, setWeather]);

  return (
      <header className="weatherApp-header">
        <form onSubmit={inputSubmit}>
          <input autoFocus onChange={inputChange} value={input} required/>
        </form>
      </header>
  )
}
export default Header;
