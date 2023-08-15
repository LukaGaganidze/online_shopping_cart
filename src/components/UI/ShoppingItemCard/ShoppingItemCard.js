import React from "react";

import classes from "./ShoppingItemCard.module.css";

const ShoppingItemCart = (props) => {
  return (
    <div className={`${classes["card-for-products"]} ${props.className}`}>
      {props.children}
    </div>
  );
};

export default ShoppingItemCart;
