/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

const TimeHandler = ({ timezone, handlePartOfDay, provideFullTime }) => {
  const [localTimeHour, setLocalTimeHour] = useState();
  const [shortLocalTime, setShortLocalTime] = useState();

  let newDate = new Date();
  let utc = newDate.getUTCHours();
  let minutes = newDate.getMinutes();

  const shortHourFormat = () => {
    if (localTimeHour > 24) {
      setShortLocalTime(localTimeHour - 24);
    } else {
      setShortLocalTime(localTimeHour);
    }
  };

  const getLocalTime = () => {
    setLocalTimeHour(utc + timezone);
  };

  useEffect(() => {
    getLocalTime();
  }, [timezone]);

  useEffect(() => {
    shortHourFormat();
  }, [localTimeHour]);

  useEffect(() => {
    if (7 <= shortLocalTime && shortLocalTime <= 18) {
      handlePartOfDay("day");
    } else {
      handlePartOfDay("night");
    }
    provideFullTime(shortLocalTime, minutes);
  }, [shortLocalTime]);
};

export default TimeHandler;
