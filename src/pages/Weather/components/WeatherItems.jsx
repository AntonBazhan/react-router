import WeatherItem from "./WeatherItem";
import styles from "./weather.module.css";
let n = 0;
const WeatherItems = ({ items }) => (
  <div className={styles.weatherItems}>
    {items.map(
      ({ dt, temp, weather, wind_speed, wind_deg, humidity, pressure }) => {
        let date = new Date(Date.now() + 24 * 3600 * 1000 * n);

        const { icon, description } = weather[0];
        n++;
        return (
          <WeatherItem
            key={dt}
            date={date}
            temp={temp}
            icon={icon}
            description={description}
            wind_speed={wind_speed}
            wind_deg={wind_deg}
            humidity={humidity}
            pressure={pressure}
          />
        );
      }
    )}
  </div>
);

export default WeatherItems;
