import React from "react";
import ReactPlayer from "react-player";
import { makeStyles, createStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      position: "relative",
      paddingTop: "56.25%",
    },
    player: {
      position: "absolute",
      top: 0,
      left: 0,
    },
  })
);

const Video = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <ReactPlayer
        url="videos/RedBull.mp4"
        controls={true}
        className={classes.player}
        width="100%"
        height="100%"
      />
    </div>
  );
};

export default Video;
