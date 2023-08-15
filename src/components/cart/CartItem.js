import React from "react";

import classes from "./CartItem.module.css";

import { useDispatch } from "react-redux";
import { cartFunctionalityActions } from "../../store/CartFunctionality-slice";
import CartQuantity from "../functionalComponenets/cartQuantity";

const CartItem = (props) => {
  const dispatch = useDispatch();
  const addQuantityHandler = () => {
    dispatch(cartFunctionalityActions.addQuantity(props.id));
  };
  const remQuantityHandler = () => {
    dispatch(cartFunctionalityActions.remQuantity(props.id));
  };

  const removeItemHandler = () => {
    dispatch(cartFunctionalityActions.removeItemFromCart(props.id));
  };
  return (
    <div className={classes["cart-item-container"]}>
      <div className={classes["cart-item"]}>
        <div className={classes["item-img-side"]}>
          <img src={props.img} className={classes["cart-item-img"]} />
          <div className={classes["item-img-side-action"]}>
            <h4>{props.name} </h4>
            <p>{props.description}</p>
            <CartQuantity
              onRemoveItem={remQuantityHandler}
              onAddItem={addQuantityHandler}
              quantity={props.quantity}
            />
          </div>
        </div>

        <div className={classes["item-cart-action"]}>
          <p>{props.price.toFixed(2)}$</p>
          <p onClick={removeItemHandler}>remove</p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
