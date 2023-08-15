import React from "react";

import classes from "./HeaderMenu.module.css";

import ErrowDown from "../../../assets/logo-n-svgs/svg/ErrowDown";

import { useDispatch, useSelector } from "react-redux";
import { menuUIActions } from "../../../store/MenuUI-slice";

const HeaderManu = (props) => {
  const formIsSubmitted = useSelector(
    (state) => state.CartUiClice.formIsSubmited
  );

  const meniIsOpen = useSelector((state) => state.MenuUISlice.menuIsOpen);

  const dispatcher = useDispatch();

  const menuClickHAndler = () => {
    dispatcher(menuUIActions.toggleMenu());
  };
  return (
    <div>
      {formIsSubmitted ? (
        <div className={`${classes["disabled-button"]} `}>
          <p>Menu</p>
        </div>
      ) : (
        <div
          onClick={menuClickHAndler}
          className={`${classes["header-menu"]} ${
            !meniIsOpen && classes["menu-down"]
          } ${formIsSubmitted ? classes["disabled-menu"] : ""}`}
        >
          <ErrowDown className={classes["header-menu-svg"]} />
          <p>Menu</p>
        </div>
      )}
    </div>
  );
};

export default HeaderManu;
