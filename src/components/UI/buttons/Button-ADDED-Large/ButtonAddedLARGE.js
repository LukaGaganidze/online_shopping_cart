import React from "react";
import CheckSVG from "../../../../assets/logo-n-svgs/svg/CheckSVG";

import classes from "./ButtonAddedLARGE.module.css";

const ButtonAdded = (props) => {
  return (
    <button
      onClick={props.onRemoveItem}
      className={`${classes["mask-added-btn"]} ${props.className}`}
    >
      Added
      <CheckSVG className={classes.checkSvg} />
    </button>
  );
};
export default ButtonAdded;
