import WeatherItems from "./WeatherItems";
import { daily } from "../data.json";
import styles from "./weather.module.css";

const Weather = () => {
  return (
    <div className={styles.weather}>
      <h1>Погода</h1>

      <WeatherItems items={daily} />
    </div>
  );
};

export default Weather;
