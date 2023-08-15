import React from "react";

import classes from "./ButtonAddLARGE.module.css";

import CartSvg from "../../../../assets/logo-n-svgs/svg/CartSvg";

const Button = (props) => {
  return (
    <button
      onClick={props.onAddItem}
      className={`${classes["mask-add-btn"]} ${props.className}`}
    >
      Add
      <CartSvg className={classes.svgCart} />
    </button>
  );
};

export default Button;
