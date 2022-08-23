import { useEffect } from "react";
import { useAll } from "./context/Context";

function Header() {
  const { input, setInput, city, setCity, setWeather } = useAll();

  const inputChange = e => {setInput(e.target.value)}
  const inputSubmit = e => {
    e.preventDefault()
    if (input !== city && input ) {
      setCity(input)
      console.log(input)
    }
  };

  useEffect(() => {
    const key = process.env.REACT_APP_WEATHER_API;
    const apiurl = `https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&lang=tr&days=8&key=${key}`;
    fetch(apiurl)
      .then(r => r.json())
      .then(setWeather)
      .catch(error => alert("veri alınamadı"));
  }, [city, setWeather]);

  return (
      <header className="weatherApp-header">
        <form onSubmit={inputSubmit}>
          <input autoFocus onChange={inputChange} value={input}  />
        </form>
      </header>
  )
}
export default Header;
