const ErrorPage = () => {
  return (
    <div>
      <p className="text-3xl font-semibold tracking-wider my-4">
        Something happened.
      </p>
      <p className="my-2 text-2xl">You can: </p>
      <ul className="text-lg">
        <li className="my-1">...refresh the page </li>
        <li className="my-1">
          ...check if the city name was spelled correctly{" "}
        </li>
        <li className="my-1">...search for another city </li>
      </ul>
    </div>
  );
};

export default ErrorPage;
