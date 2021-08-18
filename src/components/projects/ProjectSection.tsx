import React from "react";
import {
  Grid,
  makeStyles,
  createStyles,
  Theme,
  Typography,
} from "@material-ui/core";

import ProjectComponent from "./ProjectComponent";
import projects from "./projects";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    gridRoot: {
      flexGrow: 1,
    },
    title: {
      paddingBottom: theme.spacing(3),
    },
  })
);

const ProjectSection = () => {
  const classes = useStyles();

  return (
    <>
      <Typography variant="h4" align="center" className={classes.title}>
        Things I've Made
      </Typography>
      <Grid
        container
        justifyContent="center"
        spacing={3}
        className={classes.gridRoot}
      >
        {projects.map((project) => {
          return (
            <Grid key={project.title} item>
              <ProjectComponent project={project} />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};
export default ProjectSection;
