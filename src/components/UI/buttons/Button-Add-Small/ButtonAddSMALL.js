import React from "react";

import CartSVG from "../../../../assets/logo-n-svgs/svg/CartSvg";

import classes from "./ButtonAddSMALL.module.css";
const ButtonAddSMALL = (props) => {
  return (
    <button onClick={props.onAddItem} className={classes["mask-add-btn"]}>
      <p>Add</p>
      <CartSVG className={classes.cartSvg} />
    </button>
  );
};

export default ButtonAddSMALL;
