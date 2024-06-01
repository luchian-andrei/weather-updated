/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

const MainIconProvider = ({ main, partOfDay }) => {
  const [icon, setIcon] = useState();

  const mainCheck = () => {
    if (main === "Clouds" || main === "Few clouds") {
      setIcon("./icons/clouds.png");
    } else if (main === ("Clear" || "Clear sky") && partOfDay === "day") {
      setIcon("./icons/clear-sun.png");
    } else if (main === ("Clear" || "Clear sky") && partOfDay === "night") {
      setIcon("./icons/clear-moon.png");
    } else if (main === "Mist" || main === "Fog") {
      setIcon("./icons/rainbow.png");
    } else if (
      main === ("Scattered nightclouds" || "Broken clouds") &&
      partOfDay === "day"
    ) {
      setIcon("./icons/clouds-sun.png");
    } else if (
      main === ("Scattered day clouds" || "Broken clouds") &&
      partOfDay === "night"
    ) {
      setIcon("./icons/clouds-moon.png");
    } else if (main === "Rain" || main === "Shower rain") {
      setIcon("./icons/rain.png");
    } else if (main === "Thunderstorm") {
      setIcon("./icons/thunder.png");
    } else if (main === "Snow" && partOfDay === "day") {
      setIcon("./icons/snow-sun.png");
    } else if (main === "Snow" && partOfDay === "night") {
      setIcon("./icons/snow-moon.png");
    }
  };

  useEffect(() => {
    mainCheck();
  }, [main]);

  return (
    <img src={icon} alt="icon" className="sm:w-52 sm:h-52 w-20 h-20 mx-auto" />
  );
};

export default MainIconProvider;
