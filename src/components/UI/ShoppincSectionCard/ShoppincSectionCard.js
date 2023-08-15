import React from "react";

import classes from "./ShoppincSectionCard.module.css";

const ShoppincSectionCart = (props) => {
  return (
    <section className={`${classes["shopping-Section"]} ${props.className}`}>
      {props.children}
    </section>
  );
};

export default ShoppincSectionCart;
