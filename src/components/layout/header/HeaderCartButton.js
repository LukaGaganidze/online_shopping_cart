import React from "react";
import classes from "./HeaderCartButton.module.css";

import { useDispatch, useSelector } from "react-redux";
import { cartUIActions } from "../../../store/CartUi-clice";

const HeaderCartButton = () => {
  // app state (REDUX)
  const cartItemQuantity = useSelector(
    (state) => state.CartFunctionalitySlice.cartItems.length
  );
  const formIsSubmitted = useSelector(
    (state) => state.CartUiClice.formIsSubmited
  );

  const menuDisabled = useSelector((state) => state.MenuUISlice.menuIsOpen);

  const dispatcher = useDispatch();
  const cartClickHandler = () => {
    dispatcher(cartUIActions.opanCart());
    dispatcher(cartUIActions.showBlur());
  };
  return (
    <button
      disabled={menuDisabled || formIsSubmitted}
      onClick={cartClickHandler}
      className={`${
        !menuDisabled && !formIsSubmitted
          ? classes["heaeder-btn"]
          : classes["btn-dissabled"]
      }`}
    >
      <span>Cart</span>
      <div
        className={`${
          !menuDisabled
            ? classes["cart-num-border"]
            : classes["cart-num-border-dis"]
        } `}
      >
        <span>{cartItemQuantity}</span>
      </div>
    </button>
  );
};

export default HeaderCartButton;
