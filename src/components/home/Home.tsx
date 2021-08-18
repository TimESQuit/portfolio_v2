import React from "react";
import {
  Typography,
  makeStyles,
  createStyles,
  Theme,
  Container,
} from "@material-ui/core";

import Socials from "../nav/Socials";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    hi: {
      fontSize: "calc(16px + 1.5vw)",
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
    tim: {
      fontSize: "calc(48px + 4vw)",
      paddingBottom: theme.spacing(2),
    },
    careers: {
      fontSize: "16px",
      paddingBottom: theme.spacing(6),
    },
    mainText: {
      lineHeight: 2,
      letterSpacing: 1.5,
    },
  })
);

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h5" align="center" className={classes.hi}>
        Hi, I'm
      </Typography>
      <Typography variant="h2" align="center" className={classes.tim}>
        Tim
      </Typography>
      <Typography variant="body2" align="center" className={classes.careers}>
        {"Musician -> Attorney -> "}
        <em>Software Developer</em>
      </Typography>
      <Container maxWidth="sm">
        <Typography
          variant="subtitle1"
          align="center"
          className={classes.mainText}
        >
          I'm a self-taught full stack developer, with experience in
          React/Typescript, Python, Django, PostgreSQL & Docker Compose. I love
          problem solving and learning new things, whether that new thing be a
          musical instrument, a programming technology, a board game or
          something altogether new. Please take a look at some of my work and
          read some more of my story.
        </Typography>
        <Socials />
      </Container>
    </div>
  );
};

export default Home;
