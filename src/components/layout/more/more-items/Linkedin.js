import classes from "./Linkedin.module.css";

const Linkedin = (props) => {
  const linkedinState = props.activelinkedin;

  return (
    <div
      className={`${classes["linkedin"]}  ${
        linkedinState ? classes["active"] : ""
      } `}
    ></div>
  );
};

export default Linkedin;
