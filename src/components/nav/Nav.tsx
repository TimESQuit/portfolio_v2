import React from "react";
import {
  AppBar,
  Toolbar,
  makeStyles,
  createStyles,
  Typography,
  Link,
  Theme,
  Grid,
} from "@material-ui/core";

import sections from "../../sections";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    linkContainer: {
      width: "100%",
    },
    navLink: {
      margin: theme.spacing(0, 5),
      [theme.breakpoints.only("md")]: {
        margin: theme.spacing(0, 4),
      },
      [theme.breakpoints.only("sm")]: {
        margin: theme.spacing(0, 3),
      },
      [theme.breakpoints.only("xs")]: {
        margin: theme.spacing(0, 1),
      },
      color: theme.palette.primary.contrastText,
      "&:hover": {
        textDecoration: "none",
      },
    },
  })
);

const Nav = () => {
  const classes = useStyles();

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography
          variant="button"
          component="nav"
          className={classes.linkContainer}
        >
          <Grid container justifyContent="center">
            {sections.map((section) => (
              <Grid item key={section.id}>
                <Link href={`#${section.id}`} className={classes.navLink}>
                  {section.navBarName}
                </Link>
              </Grid>
            ))}
          </Grid>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
