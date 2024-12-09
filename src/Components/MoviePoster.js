import React from "react";

const MoviePoster = (props) => {
  const posterImg =
    "https://openvirtualworlds.org/omeka/files/fullsize/1/30/movie-big.jpg";

  return (
    <img
      src={props.src || posterImg} // if props.src is null or empty
      alt="Poster"
      className="img-thumbnail"
      onError={(e) => {
        e.target.onerror = null;
        e.target.src = posterImg; // Assign fallback URL if image fails to load
      }}
      width="50%"
    />
  );
};

export default MoviePoster;
