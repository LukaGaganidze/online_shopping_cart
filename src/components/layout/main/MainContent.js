import React from "react";

import classes from "./MainContent.module.css";

import Weapons from "./shop-items/weapon/Weapons";
import Mask from "../../layout/main/shop-items/mask/Mask";
import Wire from "./shop-items/wire/Wire";
import Form from "./shop-items/form/Form";

const MainContent = () => {
  return (
    <div>
      <h2 className={classes["section-h-first"]}>Weapon</h2>
      <Weapons />
      <h2 className={classes["section-h"]}>Mask</h2>
      <Mask />
      <h2 className={classes["section-h"]}>Wire</h2>
      <Wire />
      <h2 className={classes["section-h"]}>Form</h2>
      <Form />
      <div className={classes["footer-bridge"]}></div>
    </div>
  );
};

export default MainContent;
