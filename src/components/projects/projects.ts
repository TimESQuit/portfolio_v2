interface IProject {
  title: string;
  techs: string[];
  description: string;
  github: string;
  video?: null | string;
  live?: null | string;
}

const baseball: IProject = {
  title: "Baseball Data Analysis",
  techs: [
    "TypeScript",
    "React",
    "Material-UI",
    "Python",
    "Django",
    "REST API",
    "PostgreSQL",
    "Docker Compose",
  ],
  description: "Hello World",
  github: "https://github.com/karovda/baseball_client",
  video: "videos/RedBull.mp4",
  // Change the line below
  live: "#",
};

const grammarBot: IProject = {
  title: "Discord Grammar Bot",
  techs: [
    "Python",
    "Async/Await",
    "SQLite",
    "LanguageTool API",
    "Docker Compose",
  ],
  description: "It keeps track of *your* grammar.",
  github: "https://github.com/karovda/discord-grammar-bot",
  video: "videos/RedBull.mp4",
};

const fangraphs: IProject = {
  title: "Fangraphs Web Scraper",
  techs: ["Python", "Pandas", "Selenium", "PostgreSQL"],
  description:
    "I took selected advanced stats from Fangraphs, compiled and cleaned the data, and put it into a database.",
  github: "https://github.com/karovda/fangraphs-webscraper",
};

const projects = [baseball, grammarBot, fangraphs];

export default projects;
export type { IProject };
