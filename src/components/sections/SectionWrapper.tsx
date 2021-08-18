import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    sectionRoot: {
      padding: theme.spacing(2, 0, 10, 0),
      minHeight: "calc(100vh - 64px)",
    },
    lastSection: {
      padding: theme.spacing(2, 0, 25, 0),
      minHeight: "calc(100vh - 64px)",
    },
  })
);

const SectionWrapper = ({
  id,
  last = false,
  children,
}: {
  id: string;
  last?: boolean;
  children: React.ReactNode;
}) => {
  const classes = useStyles();

  return (
    <section
      id={id}
      className={last ? classes.lastSection : classes.sectionRoot}
    >
      {children}
    </section>
  );
};

export default SectionWrapper;
