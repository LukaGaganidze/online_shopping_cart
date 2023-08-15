import React from "react";

import classes from "./ButtonLoadingSML.module.css";
import LoadingSpinnerSML from "../../../../assets/logo-n-svgs/svg/loadingSpinner-Small/LoadingSpinnerSML";

const ButtonLoadingSML = (props) => {
  return (
    <button className={`${classes["small-loading-btn"]} ${props.className}`}>
      <LoadingSpinnerSML />
    </button>
  );
};

export default ButtonLoadingSML;
