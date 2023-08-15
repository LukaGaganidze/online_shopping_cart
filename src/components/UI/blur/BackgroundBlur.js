import React from "react";

import { useState, useEffect } from "react";

import classes from "./BackgroundBlur.module.css";

const BackgroundBlur = (props) => {
  const [delayedBlurr, setDelayedBlurr] = useState(false);

  useEffect(() => {
    if (props.menuState) {
      setDelayedBlurr(props.menuState);
    }

    if (!props.menuState) {
      const cleanup = setTimeout(() => {
        setDelayedBlurr(props.menuState);
      }, 500);

      return () => {
        clearTimeout(cleanup);
      };
    }
  }, [props.menuState]);

  return (
    <div
      className={`${delayedBlurr ? classes["content-blur"] : ""}`}
      onClick={props.close}
    >
      {props.children}
    </div>
  );
};

export default BackgroundBlur;
