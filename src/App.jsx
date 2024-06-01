import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import MainSection from "./sections/MainSection";
import Favorites from "./components/Favorites";
import { ToastContainer } from "react-toastify";

function App() {
  const [cityName, setCityName] = useState("bucharest");
  const [showFavorites, setShowFavorites] = useState(false);

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="w-full sm:h-screen h-full">
      <SearchBar
        provideCityName={(city) => setCityName(city)}
        handleFavorites={() => setShowFavorites(!showFavorites)}
      />
      <MainSection cityName={cityName} width={width} />
      {showFavorites && (
        <Favorites chooseFromFavorites={(favorite) => setCityName(favorite)} />
      )}
      <ToastContainer />
    </section>
  );
}

export default App;
