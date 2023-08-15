import React from "react";

import CartItem from "./CartItem";

import classes from "./Cart.module.css";

import { useSelector, useDispatch } from "react-redux";
import { cartUIActions } from "../../store/CartUi-clice";

import { Link } from "react-router-dom";

const Cart = () => {
  // cart UI
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.CartUiClice.showCart);
  const closeCartHandler = () => {
    setTimeout(() => {
      dispatch(cartUIActions.closeBlur());
    }, 500);

    dispatch(cartUIActions.closeCart());
  };

  // cart Functionality
  const cartItems = useSelector(
    (state) => state.CartFunctionalitySlice.cartItems
  );
  const cartTotalAmount = useSelector(
    (state) => state.CartFunctionalitySlice.totalAmount
  );
  const validCart = cartItems.length > 0;

  return (
    <div className={`${classes.cart} ${cartState && classes.showCart}`}>
      <div className={classes["cart-main-info"]}>
        <div>
          <span>Cart</span>
          <span>{cartItems.length}</span>
        </div>
        <button onClick={closeCartHandler}>Close</button>
      </div>
      <div className={classes["items-conteiner"]}>
        {cartItems.length === 0 && (
          <p className={classes["cart-placeholder"]}>
            Added products will appeare here
          </p>
        )}
        {cartItems.map((product) => (
          <CartItem
            name={product.name}
            description={product.description}
            img={product.img}
            price={product.price}
            quantity={product.quantity}
            key={product.id}
            id={product.id}
          />
        ))}
      </div>

      <div className={classes.subtotal}>
        <p>Subtotal</p>
        <p>{cartTotalAmount} $</p>
      </div>

      <button
        className={`${classes["checkout-btn"]} ${
          !validCart ? classes.inactive : ""
        }`}
      >
        {validCart ? (
          <Link
            onClick={() => {
              dispatch(cartUIActions.closeCart());
              setTimeout(() => {
                dispatch(cartUIActions.closeBlur());
              }, 500);
            }}
            className={classes["checkout-link"]}
            to="/checkout"
          >
            Checkout
          </Link>
        ) : (
          <span className={classes["checkout-span"]}>Checkout</span>
        )}
      </button>
    </div>
  );
};

export default Cart;
