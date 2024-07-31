import React from "react";
import ReactStars from "react-stars";

const ReactRating = ({ rating }) => {
  return (
    <ReactStars
      count={5}
      value={rating}
      size={24}
      color2={"#ffd700"}
      edit={false}
    />
  );
};

export default ReactRating;
