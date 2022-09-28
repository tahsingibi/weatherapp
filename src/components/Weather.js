import { useAll } from '../context/Context';
import WeatherItem from './WeatherItem';

function Weather() {
  const { weather } = useAll();

  return (
    <>
      {!weather && <div className="loading">Yükleniyor...</div>}
      <div className="CityTitle">
        <span>{weather?.resolvedAddress}</span> haftalık hava durumu
      </div>
      <div className="Cards">
        {weather?.days?.map(item => (
          <WeatherItem key={item?.datetime} item={item} />
        ))}
      </div>
    </>
  );
}
export default Weather;
