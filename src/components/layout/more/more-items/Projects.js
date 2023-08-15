import classes from "./Projects.module.css";

const Projects = (props) => {
  const projectsState = props.activeProjects;
  return (
    <div
      className={`${classes["projects"]}  ${
        projectsState ? classes["active"] : ""
      } `}
    ></div>
  );
};

export default Projects;
