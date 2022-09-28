import { useAll } from '../context/Context';

function WeatherItem({ item }) {
  const { dayFormat } = useAll();
  return (
    <div className="Cards-item group">
      <header className="Cards-item-title">
        {dayFormat[new Date(item?.datetimeEpoch * 1000).getDay()]}
      </header>
      <div className="Cards-item-icon">
        <img
          alt={item?.description}
          title={item?.description}
          src={`https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/SVG/3rd%20Set%20-%20Color/${item?.icon}.svg`}
        />
      </div>
      <div className="Cards-item-minmax">
        <span className="max">{Math.round(item?.tempmax)}&deg;</span>
        <span className="min">{Math.round(item?.tempmin)}&deg;</span>
      </div>
    </div>
  );
}

export default WeatherItem;