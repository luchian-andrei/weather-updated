/* eslint-disable react/prop-types */
import MainIconProvider from "../components/MainIconProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import mobileAlert from "../components/MobileAlert";

const IconSection = ({ props }) => {
  const [showInfo, setShowInfo] = useState(false);
  const [favoriteCities, setFavoriteCities] = useState([]);
  const [starColor, setStarColor] = useState();
  const [infoPurpose, setInfoPurpose] = useState([]);

  // we check if we got comething in localStorage/favorites
  const storedFavoriteCities = JSON.parse(localStorage.getItem("favorites"));

  const checkStorage = (cityName) => {
    const isFavorite = storedFavoriteCities.includes(cityName);

    // we check if the city we want to set to favorite is already on the list
    // if is not, we add the city on the list and update the local storage

    if (!isFavorite) {
      const newFavoriteCitiesList = [...favoriteCities, cityName];
      setFavoriteCities(newFavoriteCitiesList);
      localStorage.setItem("favorites", JSON.stringify(newFavoriteCitiesList));
    }

    // if it's already on the list we remove it from there and update the list in local storage
    else {
      const newFavoriteCitiesList = favoriteCities.filter(
        (savedCities) => savedCities !== cityName
      );
      setFavoriteCities(newFavoriteCitiesList);
      localStorage.setItem("favorites", JSON.stringify(newFavoriteCitiesList));
    }
  };

  // using this function we create the "favorites" library in local storage on every device visiting this page and avoid the error
  const firstCheck = () => {
    if (
      storedFavoriteCities === null ||
      storedFavoriteCities === undefined ||
      storedFavoriteCities === "seed"
    ) {
      localStorage.setItem("favorites", JSON.stringify("seed"));
    } else {
      setFavoriteCities(storedFavoriteCities);
    }
  };

  useEffect(() => {
    firstCheck();
  }, []);

  const starRelated = (cityName) => {
    const isFavorite =
      storedFavoriteCities !== null && storedFavoriteCities.includes(cityName);

    if (isFavorite === true) {
      setStarColor("yellow");
      setInfoPurpose(["remove", "from"]);
    } else if (isFavorite === false) {
      setStarColor("red");
      setInfoPurpose(["add", "to"]);
    }
  };

  useEffect(() => {
    starRelated(props.cityName);
  }, [props.cityName, favoriteCities]);

  return (
    <div className="sm:w-1/2 w-full sm:h-full h-fit  flex flex-col justify-around items-center p-10 gap-4">
      {showInfo && (
        <p className="absolute top-28 left-1/3  bg-gray-200  p-10 text-lg rounded-md shadow-lg">
          Click to {infoPurpose[0]} this city {""}
          {infoPurpose[1]} the favorites list.
        </p>
      )}
      <p className="text-2xl font-semibold tracking-wider first-letter:uppercase">
        {props.cityName}, {props.country}{" "}
        <FontAwesomeIcon
          icon={faStar}
          onClick={() => [checkStorage(props.cityName), mobileAlert(starColor)]}
          className="cursor-pointer hover:opacity-80"
          onMouseOver={() => {
            props.width < 769 ? null : setShowInfo(true);
          }}
          onMouseLeave={() => setShowInfo(false)}
          style={{ color: starColor }}
        />
      </p>
      <MainIconProvider
        main={props.main}
        partOfDay={props.partOfDay}
        cityname={props.cityName}
      />
      <p className="text-2xl tracking-wider first-letter:uppercase">
        {props.description}
      </p>
      <p className="text-xl">
        Local Time: {""}
        <span className="font-semibold">
          {props.fullTime.hour > 9
            ? props.fullTime.hour
            : `0${props.fullTime.hour}`}{" "}
          :{" "}
          {props.fullTime.minutes > 9
            ? props.fullTime.minutes
            : `0${props.fullTime.minutes}`}{" "}
        </span>
      </p>
    </div>
  );
};

export default IconSection;
