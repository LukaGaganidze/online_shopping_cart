import React from "react";

import classes from "./ContainerBig.module.css";

const ContainerBig = (props) => {
  return <div className={classes.container}>{props.children}</div>;
};

export default ContainerBig;
