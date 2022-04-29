import React from "react";
import { IconButton, makeStyles, createStyles, Theme } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      justifyContent: "center",
      width: "100%",
      paddingTop: theme.spacing(3),
    },
  })
);

const Socials = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <IconButton
          href="https://www.linkedin.com/in/tim-martin-hello/"
          target="_blank"
        >
          <LinkedInIcon />
        </IconButton>
        <IconButton href="https://github.com/timesquit" target="_blank">
          <GitHubIcon />
        </IconButton>
      </div>
    </>
  );
};

export default Socials;
