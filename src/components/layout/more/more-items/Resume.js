import classes from "./Resume.module.css";

import resumeImg from "../../../../assets/logo-n-svgs/imgs/resume.png";

import linkedin from "../../../../assets/logo-n-svgs/social-logos/linkedin.png";
import GitHub from "../../../../assets/logo-n-svgs/social-logos/github.png";
// ${classes["active"]}
const Resume = (props) => {
  const resumeState = props.activeResume;

  return (
    <div
      className={`${classes["resume"]}  ${
        resumeState ? classes["active"] : ""
      }  `}
    >
      <div className={classes["resume-n-dowload"]}>
        <div className={classes["additional-info"]}>
          <h2>You can also check my: </h2>
          <a href="https://github.com/LukaGaganidze" target="_Blanck">
            <img src={GitHub} className={classes["github-img"]} />
          </a>
          <a href="https://www.linkedin.com/in/lukagaganidze/" target="_Blanck">
            <img src={linkedin} className={classes["linkedin-img"]} />
          </a>
        </div>
        <div className={classes["resume-imgbox"]}>
          <a
            href="https://drive.google.com/file/d/1Hss2dc85qys16C74sKSg8pY-P47yhHhG/view"
            target="_Blanck"
          >
            <img src={resumeImg} className={classes["resume-img"]} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Resume;
