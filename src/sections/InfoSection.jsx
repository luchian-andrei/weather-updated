/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

import Icon from "../components/Icon";
const InfoSection = ({ props }) => {
  const [sunriseTime, setSunriseTime] = useState(0);
  const [sunsetTime, setSunsetTime] = useState(0);

  const riseAndSet = () => {
    setSunriseTime({
      hour: new Date(props.sunrise + props.timezone).getUTCHours(),
      minutes: new Date(props.sunrise + props.timezone).getUTCMinutes(),
    });
    setSunsetTime({
      hour: new Date(props.sunset + props.timezone).getUTCHours(),
      minutes: new Date(props.sunset + props.timezone).getUTCMinutes(),
    });
  };

  useEffect(() => {
    riseAndSet();
  }, [props.sunrise]);

  return (
    <section className="sm:w-1/2 sm:h-full w-full h-fit flex flex-col  sm:p-10 p-0">
      <div className="w-full h-1/2 flex flex-row justify-around items-center text-center gap-10 sm:gap-0">
        <Icon
          src="./icons/max-temp.png"
          value={Math.round(props.max)}
          caption="Max Temp."
          units="°C"
        />
        <p className="text-5xl font-bold tracking-wider">
          {Math.round(props.temp)} °C
        </p>
        <Icon
          src="./icons/min-temp.png"
          value={Math.round(props.min)}
          units="°C"
          caption="Min Temp."
        />
      </div>
      <div className="flex flex-row justify-around  items-center w-full h-1/2  mt-10 sm:mt-0">
        <div className="flex flex-row justify-around items-center w-3/4 ">
          <Icon
            src="./icons/sunrise.png"
            caption="Sunrise"
            value={
              sunriseTime !== undefined &&
              `${sunriseTime.hour} : ${sunriseTime.minutes}`
            }
          />
          <Icon
            src="./icons/sunset.png"
            caption="Sunset"
            value={` ${sunsetTime.hour} : ${
              sunsetTime.minutes > 9
                ? sunsetTime.minutes
                : `0${sunsetTime.minutes}`
            }`}
          />
        </div>
        <Icon
          src="./icons/wind.png"
          caption="Wind Speed"
          value={Math.round(props.wind)}
          units="km/h"
        />
      </div>
    </section>
  );
};

export default InfoSection;
