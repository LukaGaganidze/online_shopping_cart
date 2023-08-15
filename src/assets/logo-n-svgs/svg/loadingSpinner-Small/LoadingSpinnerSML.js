import React from "react";

import classes from "./LoadingSpinnerSML.module.css";

const LoadingSpinnerSML = (props) => {
  return (
    <div className={`${classes["lds-ellipsis"]} ${props.className}`}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default LoadingSpinnerSML;
