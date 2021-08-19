import React from "react";
import {
  Container,
  Paper,
  makeStyles,
  createStyles,
  Theme,
} from "@material-ui/core";

import sections from "./components/sections/Sections";
import Nav from "./components/nav/Nav";
import CustomThemeProvider from "./components/styles/CustomThemeProvider";
import SectionWrapper from "./components/sections/SectionWrapper";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    rootPaper: {
      minHeight: "100vh",
      minWidth: "320px",
    },
  })
);

const App = () => {
  const classes = useStyles();

  return (
    <>
      <CustomThemeProvider>
        <Paper square className={classes.rootPaper}>
          <Nav />
          <Container maxWidth="lg" component="main">
            {sections.map((section, idx) => {
              return (
                <SectionWrapper
                  key={section.id}
                  id={section.id}
                  last={idx === sections.length - 1 ? true : false}
                >
                  {section.component}
                </SectionWrapper>
              );
            })}
          </Container>
        </Paper>
      </CustomThemeProvider>
    </>
  );
};

export default App;
