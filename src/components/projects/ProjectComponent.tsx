import React from "react";
import {
  makeStyles,
  createStyles,
  Theme,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";

import Video from "../Video";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 432,
      [theme.breakpoints.only("xs")]: {
        width: `calc(100vw - 64px)`,
        minWidth: 256,
        maxWidth: 432,
      },
      //   borderColor: theme.palette.secondary.light,
    },

    bullet: {
      display: "inline-block",
      margin: "0 2px",
      transform: "scale(0.8)",
    },
    title: {
      display: "flex",
      justifyContent: "center",
    },
    pos: {
      marginBottom: 12,
    },
  })
);

const ProjectComponent = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h2" className={classes.title}>
          Baseball Data World
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      {/* <CardMedia component="video" src="videos/RedBull.mp4" autoPlay /> */}
      <Video />
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default ProjectComponent;
