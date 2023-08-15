import React from "react";

import CheckSVG from "../../../../assets/logo-n-svgs/svg/CheckSVG";

import classes from "./ButtonAddedSMALL.module.css";

const ButtonAddedSMALL = (props) => {
  return (
    <button onClick={props.onRemoveItem} className={classes["mask-added-btn"]}>
      <p>Added</p>
      <CheckSVG className={classes.checkSvg} />
    </button>
  );
};

export default ButtonAddedSMALL;
