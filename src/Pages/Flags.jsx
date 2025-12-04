import { useEffect, useState } from "react";
import Skeleton from "@/components/ui/Skeleton";

const Flags = () => {
  const [countries, setCountries] = useState(null);
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [openFilter, setOpenFilter] = useState(false);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all?fields=name,capital,cca3,flags")
      .then((res) => res.json())
      .then((data) => setCountries(data))
      .catch((err) => console.error(err));
  }, []);

const filteredCountries = countries
  ?.filter((country) => {
    const name = country.name?.common.toLowerCase();
    const capital = country.capital?.[0]?.toLowerCase() || "";
    const term = search.toLowerCase();

    return name.includes(term) || capital.includes(term);
  })
  .sort((a, b) => {
    const nameA = a.name.common.toLowerCase();
    const nameB = b.name.common.toLowerCase();

    return sortOrder === "asc"
      ? nameA.localeCompare(nameB)
      : nameB.localeCompare(nameA);
  }) || [];

  return (
    <div className="p-6 w-full text-white">
      <h1 className="text-2xl font-semibold mb-6 text-center">Flags jaja</h1>

      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search country..."
          value={search}
          onChange={(eventsearch) => setSearch(eventsearch.target.value)}
          className="px-4 py-2 w-64 rounded-lg bg-white/20 backdrop-blur text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>


      <div className="flex justify-center mb-6 relative">
        <button
          onClick={() => setOpenFilter(!openFilter)}
          className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg text-white">
          Filter
        </button>
        {openFilter && (
          <div className="absolute top-12 bg-white/20 backdrop-blur-lg p-3 rounded-lg shadow-lg flex flex-col gap-2 z-10">
            <button
              onClick={() => {
                setSortOrder("asc");
                setOpenFilter(false);
              }}
              className={`px-4 py-1 rounded text-sm ${sortOrder === "asc"
                  ? "bg-blue-500"
                  : "bg-white/20 hover:bg-white/30"
                }`} >A - Z</button>

            <button
              onClick={() => {
                setSortOrder("desc");
                setOpenFilter(false);
              }}
              className={`px-4 py-1 rounded text-sm ${sortOrder === "desc"
                  ? "bg-blue-500"
                  : "bg-white/20 hover:bg-white/30"
                }`}>Z - A</button>
          </div>
        )}
      </div>

      {countries ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6 w-full">
          {filteredCountries.length > 0 ? (
            filteredCountries.map((country) => (
              <div key={country.cca3} className="text-center">
                <img
                  src={country.flags?.png}
                  alt={country.name?.common}
                  className="w-20 h-14 object-cover rounded-md shadow mx-auto"
                />

                <p className="mt-2 text-sm font-semibold">
                  {country.name?.common}
                </p>

                <p className="text-xs opacity-90">
                  <span className="font-medium">Oficial:</span>{" "}
                  {country.name?.official}
                </p>

                <p className="text-xs opacity-90">
                  <span className="font-medium">Capital:</span>{" "}
                  {country.capital?.[0] ?? "—"}
                </p>
              </div>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-300">
              No se encuentra el pais seleccionado
            </p>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6 w-full">
          {[...Array(24)].map((_, i) => (
            <div key={i} className="text-center">
              <Skeleton width={80} height={50} />
              <Skeleton width={70} style={{ marginTop: "10px" }} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Flags;
