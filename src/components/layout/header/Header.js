import React from "react";

import classes from "./Header.module.css";
import fncgLogo from "../../../assets/logo-n-svgs/imgs/FNCG-LOGO.png";

import HeaderCartButton from "./HeaderCartButton";
import HeaderManu from "./HeaderMenu";

const Header = () => {
  return (
    <header>
      {/* ITEM */}
      <div
        className={`${classes["header-item"]} ${classes["header-item-logo"]}`}
      >
        <img className={classes["main-logo"]} src={fncgLogo} />
      </div>

      {/* ITEM */}
      <div className={classes["header-item"]}>
        <HeaderManu />
      </div>

      {/* ITEM */}
      <div className={classes["header-item"]}>
        <HeaderCartButton />
      </div>
    </header>
  );
};

export default Header;
