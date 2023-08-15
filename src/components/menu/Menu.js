import React, { useEffect, useState } from "react";
import classes from "./Menu.module.css";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { menuUIActions } from "../../store/MenuUI-slice";

const Menu = (props) => {
  const dispatcher = useDispatch();

  const menuIsnotActive = props.menuState;
  const [delayedMenu, setDelayedMenu] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setDelayedMenu(menuIsnotActive);
    }, 500);
  }, [menuIsnotActive]);

  return (
    <div
      className={`
        ${classes["menu-container"]}
        
        ${delayedMenu ? classes["active-menu"] : ""}  
        ${!menuIsnotActive ? classes["inactive-menu"] : ""} 


         ${!delayedMenu ? classes["menu-out"] : ""}
          ${menuIsnotActive ? classes["menu-in"] : ""}
        
       
        `}
    >
      <ul>
        <li
          onClick={() => dispatcher(menuUIActions.closeMenu())}
          className={classes.pieces}
        >
          <Link className={classes["menu-link"]} to="/">
            Product
          </Link>
        </li>

        <li
          onClick={() => dispatcher(menuUIActions.closeMenu())}
          className={classes.about}
        >
          <Link className={classes["menu-link"]} to="/about">
            About
          </Link>
        </li>
        {/* 
        <li
          onClick={() => dispatcher(menuUIActions.closeMenu())}
          className={classes.contact}
        >
          <Link className={classes["menu-link"]} to="/contact">
            Contact
          </Link>
        </li> */}
        <li
          onClick={() => dispatcher(menuUIActions.closeMenu())}
          className={classes.more}
        >
          <Link className={classes["menu-link"]} to="/more">
            More
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
