import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

const Weather = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    fetch("https://wttr.in/Guatemala?format=j1")
      .then((res) => res.json())
      .then((data) => {

        setTimeout(() => {
          setWeather(data);
        }, 800);
      })
      .catch((err) => console.error(err));
  }, []);

  // const current = weather ? weather.current_condition[0] : null;
  // const current = weather && weather.current_condition[0];
  const current = weather?.current_condition[0];

  return (
    <div className="p-6 max-w-sm bg-white/10 backdrop-blur-md rounded-xl shadow-lg text-white">
      <h1 className="text-2xl font-semibold mb-4">Clima en Guatemala</h1>

      {weather ? (
        <div>
          <p><strong>Temperatura:</strong> {current?.temp_C}°C</p>
          <p><strong>Sensación:</strong> {current?.FeelsLikeC}°C</p>
          <p><strong>Humedad:</strong> {current?.humidity}%</p>
          <p><strong>Viento:</strong> {current?.windspeedKmph} km/h</p>
          <p><strong>Descripción:</strong> {current?.weatherDesc[0].value}</p>
        </div>
      ) : (
        <div>
          <Skeleton width={32} />
          <Skeleton width={28} />
          <Skeleton width={24} />
          <Skeleton width={28} />
          <Skeleton width={40} />
        </div>
      )}
    </div>
  );
};

export default Weather;
