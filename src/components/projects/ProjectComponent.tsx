import React from "react";
import {
  makeStyles,
  createStyles,
  Theme,
  IconButton,
  Card,
  CardActions,
  CardContent,
  Typography,
  Chip,
} from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LaunchIcon from "@material-ui/icons/Launch";

import Video from "../Video";
import { IProject } from "./projects";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 592,
      [theme.breakpoints.only("xs")]: {
        width: `calc(100vw - 64px)`,
        minWidth: 256,
        maxWidth: 592,
      },
      height: 620,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
    rootNoVideo: {
      width: 592,
      [theme.breakpoints.only("xs")]: {
        width: `calc(100vw - 64px)`,
        minWidth: 256,
        maxWidth: 592,
      },
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
    content: {
      padding: theme.spacing(2),
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      flexGrow: 1,
    },
    title: {
      paddingBottom: theme.spacing(1),
    },
    chipContainer: {
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      "& > *": {
        margin: theme.spacing(0.25),
      },
      marginBottom: theme.spacing(2),
    },
    description: {
      paddingBottom: theme.spacing(2),
    },
    actionArea: {
      padding: theme.spacing(0, 2, 2, 2),
    },
  })
);

const ProjectComponent = ({ project }: { project: IProject }) => {
  const classes = useStyles();

  return (
    <Card
      className={project.video ? classes.root : classes.rootNoVideo}
      variant="outlined"
    >
      <CardContent className={classes.content}>
        <Typography
          variant="h5"
          component="h2"
          align="center"
          className={classes.title}
        >
          {project.title}
        </Typography>
        <div className={classes.chipContainer}>
          {project.techs.map((tech) => {
            return (
              <Chip
                key={tech}
                size="small"
                label={tech}
                color="secondary"
                variant="outlined"
              />
            );
          })}
        </div>
        <Typography
          variant="body2"
          component="p"
          align="center"
          className={classes.description}
        >
          {project.description}
        </Typography>
        {project.video && <Video url={project.video} />}
      </CardContent>
      <CardActions className={classes.actionArea}>
        {project.live && (
          <IconButton size="small" href={project.live} target="_blank">
            <LaunchIcon />
          </IconButton>
        )}
        <IconButton size="small" href={project.github} target="_blank">
          <GitHubIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default ProjectComponent;
