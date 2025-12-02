import { useEffect, useState } from "react";
import Skeleton from "@/components/ui/Skeleton";

const Flags = () => {
  const [countries, setCountries] = useState(null);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all?fields=name")
      .then((res) => res.json())
      .then((data) => setCountries(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="p-6 max-w-sm bg-white/10 backdrop-blur-md rounded-xl shadow-lg text-white">
      <h1 className="text-2xl font-semibold mb-4">Flags jaja</h1>

      {countries ? (
        <div>
          {countries.slice(0, 10).map((country) => (
            <div key={country.cca3} className="mb-4">
              <img
                src={country.flags?.png}
                alt={country.name?.common}
                className="w-32 h-20 object-cover rounded-md shadow mx-auto"
              />
              <p className="mt-2 text-center text-lg font-semibold">
                {country.name?.common}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <Skeleton width={128} height={80} />
          <Skeleton width={100} style={{ marginTop: "10px" }} />

          <Skeleton width={128} height={80} style={{ marginTop: "20px" }} />
          <Skeleton width={100} style={{ marginTop: "10px" }} />

          <Skeleton width={128} height={80} style={{ marginTop: "20px" }} />
          <Skeleton width={100} style={{ marginTop: "10px" }} />
        </div>
      )}
    </div>
  );
};

export default Flags;

