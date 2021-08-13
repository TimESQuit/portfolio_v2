import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    sectionRoot: {
      padding: theme.spacing(2, 0, 5, 0),
      minHeight: "calc(100vh - 64px)",
    },
  })
);

const SectionWrapper = ({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) => {
  const classes = useStyles();

  return (
    <section id={id} className={classes.sectionRoot}>
      {children}
    </section>
  );
};

export default SectionWrapper;
