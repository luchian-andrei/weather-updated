import { toast, Slide } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const mobileAlert = (starColor) => {
  if (starColor === "red") {
    toast.success("This city was added in the favorites list.", {
      position: "top-center",
      transition: Slide,
      icon: <FontAwesomeIcon icon={faStar} style={{ color: "yellow" }} />,
    });
  } else if (starColor === "yellow") {
    toast.warn("This city was removed from the favorites list.", {
      position: "top-center",
      transition: Slide,
      icon: <FontAwesomeIcon icon={faStar} style={{ color: "red" }} />,
    });
  }
};

export default mobileAlert;
