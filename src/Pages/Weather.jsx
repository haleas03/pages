import { useEffect, useState } from "react";

export default function Weather() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    fetch("https://wttr.in/Guatemala?format=j1")
      .then((res) => res.json())
      .then((data) => {
        setWeather(data);
      })
      .catch((err) => console.error(err));
  }, []);

  if (!weather) return <h2>Cargando clima...</h2>;

  const current = weather.current_condition[0];

  return (
    <div style={{ padding: 20 }}>
      <h1>Clima en Guatemala</h1>
      <p><strong>Temperatura:</strong> {current.temp_C}°C</p>
      <p><strong>Sensación:</strong> {current.FeelsLikeC}°C</p>
      <p><strong>Humedad:</strong> {current.humidity}%</p>
      <p><strong>Viento:</strong> {current.windspeedKmph} km/h</p>
      <p><strong>Descripción:</strong> {current.weatherDesc[0].value}</p>
    </div>
  );
}
