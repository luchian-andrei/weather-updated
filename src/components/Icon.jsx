/* eslint-disable react/prop-types */
const Icon = ({ src, caption, value, units }) => {
  return (
    <div className="flex flex-col w-1/3">
      <img
        src={src}
        alt={caption}
        className="sm:w-20 sm:h-20 w-10 h-10 m-auto"
      />
      <p className="font-semibold text-lg">
        {value} {units}{" "}
      </p>
      <p>{caption}</p>
    </div>
  );
};

export default Icon;
