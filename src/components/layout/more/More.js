import React, { useState } from "react";

import classes from "./More.module.css";

import Resume from "./more-items/Resume";
// import Projects from "./more-items/Projects";
// import Linkedin from "./more-items/Linkedin";

import ContainerBig from "./../../UI/container-big/ContainerBig";

const More = (props) => {
  const [resume, setResume] = useState(false);
  // const [linkedin, setLinkedin] = useState(false);
  // const [projects, setprojects] = useState(false);
  const initialState = !resume;

  const activeersumeHandler = () => {
    setResume(true);
    // setLinkedin(false);
    // setprojects(false);
  };
  const activeLinkedinState = () => {
    setResume(false);
    // setLinkedin(true);
    // setprojects(false);
  };
  const activeprojectsHandler = () => {
    setResume(false);
    // setLinkedin(false);
    // setprojects(true);
  };
  return (
    <div className={classes["main-container"]}>
      <div
        className={`${classes["mback-for-initial-contnet"]} ${
          !initialState ? classes["inactive-background"] : ""
        }`}
      ></div>
      <ContainerBig>
        <div className={classes["more-container"]}>
          <div className={classes["content-callers"]}>
            {/* resume Caller */}
            <div
              onClick={activeersumeHandler}
              className={`${classes["section-resume"]}  ${classes["section"]}  
            ${resume ? classes["active"] : ""}`}
            >
              Resume
            </div>

            {/* linkedin Caller */}
            {/* <div
              onClick={activeLinkedinState}
              className={`${classes["section-linkedin"]} ${classes["section"]}
            ${linkedin ? classes["active"] : ""}`}
            >
              Linkedin
            </div> */}

            {/* projects Caller */}
            {/* <div
              onClick={activeprojectsHandler}
              className={`${classes["section-projects"]} ${classes["section"]}
            ${projects ? classes["active"] : ""}`}
            >
              Projects
            </div> */}
          </div>

          {/* inital Content */}
          <div
            className={`${classes["inital-content"]} ${
              !initialState ? classes["inactive-initial"] : ""
            }`}
          >
            <h1>I’m a front-end web developer based in Tbilisi, Georgia.</h1>
            <p>
              I am a self taught front end web developer. I have 1 year of
              experience in the programming industry. I am a very disciplined
              and aim oriented person. I am an ex professional sports athlete
              and I can proudly say that I have built the best version of me as
              a fencer. My plan is to do the same in web development, outside of
              freelancing I spend most of my time just to learn new skills and
              master them. I would be more than happy to become a part of your
              company and take part in achieving goals!
            </p>
          </div>
          <div className={classes["content"]}>
            <Resume activeResume={resume} />
            {/* <Linkedin activelinkedin={linkedin} /> */}
            {/* <Projects activeProjects={projects} /> */}
          </div>
        </div>
      </ContainerBig>
    </div>
  );
};

export default More;
