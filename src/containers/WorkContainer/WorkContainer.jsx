import "./WorkContainer.scss";
import calculator from "../../assets/calculator-project.png";
import snake from "../../assets/snake-project.png";
import api from "../../assets/api-punk-project.png";
import coursology from "../../assets/coursology.png"
import Card from "../../components/Card/Card";

const WorkContainer = () => {
  const projects = [
    {
      image: coursology,
      title: "Coursology",
      description:
        "This full stack project represents a school's content management system. Courses and teachers can be created, updated and deleted and are stored in the database and displayed in the site.",
      languages: ["React", "SASS", "Java", "Spring Boot", "MySQL"],
      code: "https://github.com/AndyBowerman/Courseology-Full-Stack-Project",
      site: "#"
    },
    {
        image: snake,
        title: "Snake Game",
        description:
          "Based on snake from the early 2000s, this game allows you to select a difficulty level and records your high score. ",
        languages: ["HTML", "SASS", "JavaScript"],
        code: "https://github.com/AndyBowerman/JS-Snake-Game",
        site: "https://andybowerman.github.io/JS-Snake-Game/"
      },
      {
        image: api,
        title: "Brew Dog API",
        description:
          "I've used React to build out a front end that will display the results of a call to the Brew Dog API. Users can search, filter using a number of options and view information on each beer.",
        languages: ["React", "SASS", "Restful API"],
        code: "https://github.com/AndyBowerman/punk-api-project",
        site: "https://andybowerman.github.io/punk-api-project/"
      },
      {
        image: calculator,
        title: "JS Calculator",
        description:
          "JavaScript Calculator that can perform all basic calculations and chain calculations together.",
        languages: ["HTML", "SASS", "JavaScript"],
        code: "https://github.com/AndyBowerman/JS-Calculator",
        site: "https://andybowerman.github.io/JS-Calculator/"
      },
  ];

  const renderProjects = projects.map((item, index) => (
    <Card
      key={index}
      image={item.image}
      title={item.title}
      description={item.description}
      languages={item.languages}
      name={index % 2 === 0 ? "card" : "card card-reverse"}
      code={item.code}
      site={item.site}
    />
  ));

  return (
    <div className="work-container">
        {renderProjects}
        <div></div>
    </div>
  )
};

export default WorkContainer;
