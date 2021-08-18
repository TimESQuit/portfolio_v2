import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    player: {
      padding: theme.spacing(1),
    },
  })
);

const Video = ({ url }: { url: string }) => {
  const classes = useStyles();

  return (
    <video src={url} controls preload="auto" className={classes.player}></video>
  );
};

export default Video;
