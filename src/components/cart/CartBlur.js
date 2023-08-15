import React from "react";

import classes from "./CartBlur.module.css";

import { useDispatch, useSelector } from "react-redux";
import { cartUIActions } from "../../store/CartUi-clice";

const CartBlur = () => {
  const dispatcher = useDispatch();
  const closeCartHandler = () => {
    setTimeout(() => {
      dispatcher(cartUIActions.closeBlur());
    }, 500);
    dispatcher(cartUIActions.closeCart());
  };

  return <div onClick={closeCartHandler} className={`${classes.blur} `}></div>;
};

export default CartBlur;
