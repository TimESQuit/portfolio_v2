import React from "react";

import Main from "./components/Main/Main";
import ProjectComponent from "./components/projects/ProjectComponent";
import ProjectSection from "./components/projects/ProjectSection";

interface ISection {
  navBarName: string;
  id: string;
  component: JSX.Element;
}

const lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at diam porttitor, mattis enim et, lobortis neque. Quisque eleifend porta erat id mattis. Donec mollis odio vitae egestas pharetra. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur ullamcorper vestibulum auctor. Suspendisse potenti. In ut tortor tempor augue consectetur laoreet. Nulla lorem enim, convallis sit amet consequat id, iaculis id lectus. Pellentesque molestie a quam a finibus. Maecenas sit amet luctus dui. In eleifend sem ante, molestie rutrum mi viverra sit amet. Curabitur fermentum pretium arcu ut mollis. In placerat non lectus eu pretium. Maecenas cursus, dolor sit amet egestas faucibus, velit velit posuere metus, at iaculis odio lacus nec metus.";

const about: ISection = {
  navBarName: "About",
  id: "about",
  component: <Main />,
};

const project: ISection = {
  navBarName: "Project",
  id: "project",
  component: <ProjectSection />,
};

const test1: ISection = {
  navBarName: "Test1",
  id: "test1",
  component: (
    <>
      <h1>Test1</h1>
      <div>{lorem}</div>
    </>
  ),
};

const Test2Component = () => {
  return (
    <>
      <h1>Test2</h1>
      <div>{lorem}</div>
    </>
  );
};

const test2: ISection = {
  navBarName: "Test2",
  id: "test2",
  component: <Test2Component />,
};

const sections = [about, project, test1, test2];

export default sections;
