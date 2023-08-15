import React from "react";

import classes from "./ButtonLoadingLarge.module.css";

import LoadingSpinner from "../../../../assets/logo-n-svgs/svg/loading-spinner/LoadingSpinner";

const ButtonLoading = (props) => {
  return (
    <button className={classes["spinner-button"]}>
      <LoadingSpinner className={classes.spinner} />
    </button>
  );
};

export default ButtonLoading;
