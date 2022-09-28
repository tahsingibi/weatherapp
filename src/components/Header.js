import { useEffect } from "react";
import { useAll } from "../context/Context";

function Header() {
  const { input, setInput, city, setCity, setWeather } = useAll();

  const inputChange = e => setInput(e.target.value)
  const inputSubmit = e => {
    e.preventDefault()
    if (input && input !== city)setCity(input)
  };

  useEffect(() => {
    const key = process.env.REACT_APP_WEATHER_API;
    const apiurl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/next7days?unitGroup=metric&elements=datetime%2CdatetimeEpoch%2Cname%2Caddress%2Ctempmax%2Ctempmin%2Cdescription%2Cicon&include=days&key=${key}&contentType=json
    `;
    fetch(apiurl)
      .then(r => r.json())
      .then(setWeather)
      .catch(e => console.log(`Veri çekilirken hata oluştu: ${e}`));
  }, [city, setWeather]);

  return (
    <header className="AppHeader">
      <form onSubmit={inputSubmit}>
        <input autoFocus onChange={inputChange} value={input} required />
      </form>
    </header>
  );
}
export default Header;
