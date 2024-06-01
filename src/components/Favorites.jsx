/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";

const Favorites = ({ chooseFromFavorites }) => {
  const [favoriteCities, setFavoriteCities] = useState("");

  const citiesInStorage = JSON.parse(localStorage.getItem("favorites"));

  const checkStorage = () => {
    if (citiesInStorage === "seed") {
      setFavoriteCities("No cities set to favorite.");
    } else {
      setFavoriteCities(citiesInStorage);
    }
  };

  console.log("citiesInStorage", citiesInStorage);

  useEffect(() => {
    checkStorage();
  }, []);

  console.log("favoriteCities", favoriteCities);

  return (
    <div className="flex flex-col absolute top-24 left-0 bg-gray-200  text-xl p-10 gap-4 rounded-md max-h-72 overflow-y-scroll ">
      {favoriteCities === "No cities set to favorite."
        ? favoriteCities
        : Object.values(favoriteCities).map((city, index) => (
            <p
              key={index}
              className="first-letter:uppercase border-b-2 border-black bg-white rounded-lg p-2 text-black cursor-pointer"
              onClick={() => chooseFromFavorites(city)}
            >
              {city}
            </p>
          ))}
    </div>
  );
};

export default Favorites;
