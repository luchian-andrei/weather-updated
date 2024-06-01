/* eslint-disable react/prop-types */
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Slide, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SearchBar = ({ provideCityName, handleFavorites }) => {
  const [cityName, setCityName] = useState("");

  const alert = () => {
    toast.error(
      "In order for this to work you have to provide a valid city name.",
      {
        position: "bottom-right",
        transition: Slide,
        closeOnClick: true,
      }
    );
  };

  return (
    <section className="w-full py-6 bg-black text-white flex sm:justify-center justify-around items-center gap-6  mx-auto">
      <FontAwesomeIcon
        icon={faStar}
        className="text-yellow-300 text-2xl hover:opacity-75 cursor-pointer"
        onClick={() => handleFavorites()}
      />
      <input
        type="text"
        onChange={(e) => setCityName(e.target.value)}
        placeholder="Enter your city name"
        className="sm:w-1/3 w-1/2 px-3 py-2 text-lg text-black rounded-sm"
        value={cityName}
      />
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        className="text-lg bg-white text-black rounded-full p-3 justify-center items-center hover:opacity-75 cursor-pointer"
        onClick={
          cityName === ""
            ? () => alert()
            : () => [provideCityName(cityName), setCityName("")]
        }
      />
    </section>
  );
};

export default SearchBar;
