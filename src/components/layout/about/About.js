import React from "react";
import classes from "./About.module.css";

// pics
import html from "../../../assets/footer-images/HTML.png";
import css from "../../../assets/footer-images/css.png";
import firebase from "../../../assets/footer-images/firebase.png";
import redux from "../../../assets/footer-images/redux.png";
import react from "../../../assets/footer-images/react.png";
import github from "../../../assets/logo-n-svgs/social-logos/github.png";

const About = () => {
  return (
    <div className={classes["about-sec-container"]}>
      <div className={classes["skills-side-container"]}>
        <h2>Tools and skills I have used in project</h2>
        <div className={classes["skills-side"]}>
          <div className={classes["skills-side-img-box"]}>
            <img className={classes["skills-side-img"]} src={react} />
            <p>React</p>
          </div>
          <div className={classes["skills-side-img-box"]}>
            <img className={classes["skills-side-img"]} src={redux} />
            <p>Redux</p>
          </div>

          <div className={classes["skills-side-img-box"]}>
            <img className={classes["skills-side-img"]} src={html} />
            <p>HTML</p>
          </div>
          <div className={classes["skills-side-img-box"]}>
            <img className={classes["skills-side-img"]} src={css} />
            <p>CSS</p>
          </div>
          <div className={classes["skills-side-img-box"]}>
            <img className={classes["skills-side-img"]} src={firebase} />
            <p>Firebase</p>
          </div>
        </div>

        <div className={classes["aditional-info"]}>
          <h2>Project on GitHub</h2>
          <a
            href="https://github.com/LukaGaganidze/manifestFNCG"
            target="_Blanck"
          >
            <img src={github} />
          </a>
        </div>
      </div>

      <div className={classes["about-sec-text"]}>
        <h1 className={classes.test}>
          Online fencing equipment shop <br /> <span> manifest FNCG</span>
        </h1>
        <p>
          This is a conceptual fencing sportswear/gear online shop. The
          inspiration for the design was fencing itself, due to how elegant and
          minimalist it is.
        </p>
        <p>
          This web application was built with React/Redux. To simulate sending
          cart data to the backend, I have used Firebase.
        </p>
      </div>
    </div>
  );
};

export default About;
