import moment from "moment";
import "moment/locale/uk";
import styles from "./weather.module.css";

moment.locale("uk");

const WeatherItem = ({
  date,
  temp: { day, min, max },
  wind_speed,
  wind_deg,
  humidity,
  pressure,
  description,
  icon,
}) => {
  const formattedDate = moment(date, "DD/MM/YYYY").format("dddd DD MMMM YYYY");
  const url = `https://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/${icon}.png`;

  return (
    <div className={styles.weatherItem}>
      <p className={styles.data}>{formattedDate}</p>
      <img src={url} alt="icon" />
      <p className={styles.description}> {description}</p>
      <p>Температура: {day} °C</p>
      <p>Мінімальна температура: {min} °C</p>
      <p>Максимальна температура: {max} °C</p>
      <p>Швидкість вітру: {wind_speed} m/c</p>
      <p>Напрям вітру: {wind_deg} ° </p>
      <p>Вологість: {humidity} %</p>
      <p>Атмосферний тиск: {pressure} hPa</p>
    </div>
  );
};

export default WeatherItem;
