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
  description:
    "A site for comparing advanced baseball statistics. It includes sortable stats, an interactive player search, career leaders and stat explanations.",
  github: "https://github.com/karovda/baseball_client",
  video: "videos/BaseballShowcase.mp4",

  // Change the line below
  live: "#goesnowhere",
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
  description:
    "This Discord bot watches messages and checks them for incorrect usage of your/you're, as well as suggests grammar/spelling corrections upon request. It uses a hosted instance of the LanguageTool API for the grammar logic.",
  github: "https://github.com/karovda/discord-grammar-bot",
  video: "videos/GrammarShowcase.mp4",
};

const fangraphs: IProject = {
  title: "Fangraphs Web Scraper",
  techs: ["Python", "Pandas", "Selenium", "PostgreSQL"],
  description:
    "This is a data workflow that  scrapes every baseball player, compiles it, creates new derivative statistics, and inputs the results into PostgreSQL. It was used to build the database for the Baseball Data Analysis site.",
  github: "https://github.com/karovda/fangraphs-webscraper",
};

const projects = [baseball, grammarBot, fangraphs];

export default projects;
export type { IProject };
