import React from "react";

import Home from "../home/Home";
import Main from "../about/About";
import ProjectSection from "../projects/ProjectSection";

interface ISection {
  navBarName: string;
  id: string;
  component: JSX.Element;
}

const home: ISection = {
  navBarName: "Home",
  id: "home",
  component: <Home />,
};

const about: ISection = {
  navBarName: "About",
  id: "about",
  component: <Main />,
};

const project: ISection = {
  navBarName: "Work",
  id: "work",
  component: <ProjectSection />,
};

const sections = [home, project, about];

export default sections;
