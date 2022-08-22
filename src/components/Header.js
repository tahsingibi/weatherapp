import { useEffect } from "react";
import { useAll } from "./context/Context";

function Header() {
  const inputChange = (e) => {
    setInput(e.target.value);
  };

  const { input, setInput, sehir, setSehir, setWeather } = useAll();

  const inputSubmit = (e) => {
    e.preventDefault();
    if (!input) {
      return alert("Arama alanı boş bırakılamaz");
    }
    setSehir(input);
  };

  useEffect(() => {
    const key = process.env.REACT_APP_WEATHER_API;
    const apiurl = `https://api.weatherbit.io/v2.0/forecast/daily?city=${sehir}&lang=tr&days=8&key=${key}`;
    fetch(apiurl)
      .then((r) => r.json())
      .then((data) => setWeather(data))
      .catch((error) => alert("veri alınamadı"));
  }, [sehir, setWeather]);

  return (
    <header className="weatherApp-header">
      <form onSubmit={inputSubmit}>
        <input autoFocus onChange={inputChange} value={input} required />
      </form>
    </header>
  );
}

export default Header;
