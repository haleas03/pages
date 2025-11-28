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


  if (!weather) {
    return (
      
      <div className="p-6 max-w-sm space-y-4">
        <h1 className="text-2xl font-semibold mb-2">Clima en Guatemala</h1>

        <Skeleton className="h-5 w-40" />
        <Skeleton className="h-5 w-32" />
        <Skeleton className="h-5 w-28" />
        <Skeleton className="h-5 w-24" />
        <Skeleton className="h-5 w-48" />
      </div>
    );
  }


  const current = weather.current_condition[0];

  return (
    <div className="p-6 max-w-sm bg-white/10 backdrop-blur-md rounded-xl shadow-lg text-white">
      <h1 className="text-2xl font-semibold mb-4">Clima en Guatemala</h1>

      <p><strong>Temperatura:</strong> {current.temp_C}°C</p>
      <p><strong>Sensación:</strong> {current.FeelsLikeC}°C</p>
      <p><strong>Humedad:</strong> {current.humidity}%</p>
      <p><strong>Viento:</strong> {current.windspeedKmph} km/h</p>
      <p><strong>Descripción:</strong> {current.weatherDesc[0].value}</p>
    </div>
  );
};

export default Weather;
