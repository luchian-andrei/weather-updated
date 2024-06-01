/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import IconSection from "./IconSection";
import InfoSection from "./InfoSection";
import TimeHandler from "../components/TimeHandler";
import ErrorPage from "./ErrorPage";

const MainSection = ({ cityName, width }) => {
  // temperature related states
  const [temp, setTemp] = useState(0);
  const [max, setMax] = useState(0);
  const [min, setMin] = useState(0);
  const [feelLike, setFeelLike] = useState(0);

  // geography related states
  const [country, setCountry] = useState("");
  const [timezone, setTimezone] = useState(0);
  const [partOfDay, setPartOfDay] = useState("");
  const [fullTime, setFullTime] = useState(0);
  const [sunrise, setSunrise] = useState(0);
  const [sunset, setSunset] = useState(0);

  // weather description states
  const [description, setDescription] = useState("");
  const [main, setMain] = useState("");
  const [wind, setWind] = useState(0);

  const [error, setError] = useState(false);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${
          import.meta.env.VITE_API_KEY
        }&units=metric`
      );
      const data = await response.json();
      setCountry(data.sys.country);
      setTemp(data.main.temp);
      setMax(data.main.temp_max);
      setMin(data.main.temp_min);
      setFeelLike(data.main.feels_like);
      setSunrise(data.sys.sunrise * 1000);
      setSunset(data.sys.sunset * 1000);
      setDescription(data.weather[0].description);
      setMain(data.weather[0].main);
      setTimezone(data.timezone);
      setWind(data.wind.speed);
      setError(false);
    } catch (error) {
      console.error(error);
      setError(true);
    }
  };

  useEffect(() => {
    fetchData();
  }, [cityName]);

  return (
    <section className="w-full h-3/4 flex flex-col sm:flex-row justify-center items-center  mx-auto text-center p-5 ">
      {error ? (
        <ErrorPage />
      ) : (
        <>
          {" "}
          <IconSection
            props={{
              cityName,
              country,
              description,
              main,
              partOfDay,
              fullTime,
              feelLike,
              width,
            }}
          />
          <InfoSection
            props={{
              timezone: timezone * 1000,
              sunrise,
              sunset,
              temp,
              max,
              min,
              wind,
            }}
          />
          <TimeHandler
            timezone={timezone / 3600}
            handlePartOfDay={(part) => setPartOfDay(part)}
            provideFullTime={(hour, minutes) => setFullTime({ hour, minutes })}
          />{" "}
        </>
      )}
    </section>
  );
};

export default MainSection;
