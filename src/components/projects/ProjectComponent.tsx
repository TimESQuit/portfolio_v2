import React from "react";
import {
  makeStyles,
  createStyles,
  Theme,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
  Chip,
} from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";

import Video from "../Video";
import { IProject } from "./projects";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 432,
      [theme.breakpoints.only("xs")]: {
        width: `calc(100vw - 64px)`,
        minWidth: 256,
        maxWidth: 432,
      },
    },
    title: {
      display: "flex",
      justifyContent: "center",
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
    githubIcon: {
      marginRight: theme.spacing(1),
    },
  })
);

const ProjectComponent = ({ project }: { project: IProject }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h2" className={classes.title}>
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
        <Typography variant="body2" component="p">
          {project.description}
        </Typography>
      </CardContent>
      {project.video && <Video url={project.video} />}
      <CardActions>
        <Button size="small" href={project.github}>
          <GitHubIcon className={classes.githubIcon} /> <span>the code</span>
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProjectComponent;
