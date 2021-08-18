import React from "react";
import {
  Typography,
  Container,
  makeStyles,
  createStyles,
  Theme,
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    imgContainer: {
      display: "flex",
      justifyContent: "center",
      width: "100%",
      paddingBottom: theme.spacing(2),
    },
    img: {
      maxWidth: "600px",
      objectFit: "scale-down",
      [theme.breakpoints.down("xs")]: {
        maxWidth: "100%",
      },
    },
    subTitle: {
      padding: theme.spacing(2, 0),
    },
    text: {
      lineHeight: 2,
      letterSpacing: 1.5,
      textIndent: "10%",
    },
  })
);

const Main = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="md">
      <div className={classes.imgContainer}>
        <img
          src="images/TAndH.jpg"
          alt="selfie of wife and I next to the water"
          className={classes.img}
        />
      </div>
      <Typography variant="h4" align="center" className={classes.subTitle}>
        My Story
      </Typography>
      <Typography className={classes.text}>
        Before I could write, I began learning the violin. Later, I picked up
        the piano, trumpet, organ, and other instruments. Through many years of
        work and the luck of opportunity, I played at Carnegie Hall, the Kennedy
        Center, and other wonderful places. I loved music, but after college, my
        passion for it was dimming; the difficulty of trying to make a career
        out of music certainly wasn't helping.
      </Typography>
      <Typography className={classes.text}>
        So, I decided to pursue another interest and go to law school to become
        a lawyer. Law school turned out to be quite challenging, but I made it
        through, and passed the bar. Standing in front of a judge for the first
        time was both a proud accomplishment and nerve-racking experience.
        However, the legal work I fell into slowly became unfulfilling. I
        realized the lack of fulfillment wasn't from any particular legal job,
        but the field in general. As I was making this realization, I started
        learning to code.
      </Typography>
      <Typography variant="h4" align="center" className={classes.subTitle}>
        Developer
      </Typography>
      <Typography className={classes.text}>
        It didn't take long before I loved coding. I wanted to keep learning
        more, while my work in law was draining me. After a year of coding, I
        quit my job and taught myself how to develop software full-time. I've
        made a number of projects along the way, intersecting with some of my
        other interests. Now, I continue the process of learning new
        technologies and making new and useful software.
      </Typography>
    </Container>
  );
};

export default Main;
