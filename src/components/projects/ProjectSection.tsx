import React from "react";
import { Grid, makeStyles, createStyles, Theme } from "@material-ui/core";

import ProjectComponent from "./ProjectComponent";

const mockProjectData = [1, 2, 3];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
  })
);

const ProjectSection = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      justifyContent="center"
      spacing={3}
      className={classes.root}
    >
      {mockProjectData.map((project) => {
        return (
          <Grid key={project} item>
            <ProjectComponent />
          </Grid>
        );
      })}
    </Grid>
  );
};
export default ProjectSection;
