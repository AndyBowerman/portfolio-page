import "./WorkContainer.scss";
import hangman from "../../assets/hang-man.png";
import snake from "../../assets/snake-project.png";
import api from "../../assets/api-punk-project.png";
import coursology from "../../assets/coursology.png";
import Card from "../../components/Card/Card";
import personalApp from "../../assets/Homepage.png";
import propertyTracker from "../../assets/property-tracker.png"

const WorkContainer = () => {
  const projects = [
    {
      image: personalApp,
      title: "Personal Application (Weather App & To Do List)",
      description:
        "This page contains a weather app displaying the users current location with the option to search other locations and a to do list.",
      languages: ["React", "SASS", "weatherapi.com"],
      code: "https://github.com/AndyBowerman/personal-app",
      site: "https://andybowerman.github.io/personal-app/",
    },
    {
      image: coursology,
      title: "Coursology",
      description:
        "This full stack project represents a universities content management system. Courses and teachers can be created, updated and deleted and are stored in the database and displayed in the site.",
      languages: ["React", "SASS", "Java", "Spring Boot", "MySQL"],
      code: "https://github.com/AndyBowerman/Courseology-Full-Stack-Project",
      site: "",
    },
    {
      image: hangman,
      title: "Hangman",
      description:
        "Play Hangman in the console, users can select a difficulty level which will alter the length of the word to be guessed.",
      languages: ["Java"],
      code: "https://github.com/AndyBowerman/Hang-Man-2",
      site: "",
    },
    {
      image: propertyTracker,
      title: "Property Tracker",
      description:
        "The front end of this property application is built in React. Users can create a profile and then login to the site where they can add, view, remove and update properties listed for sale and for rent. I've created the database using Firestore.",
      languages: ["React","Firebase", "SASS"],
      code: "https://github.com/AndyBowerman/property-tracker-app",
      site: "https://andybowerman.github.io/property-tracker-app/",
    },
    {
      image: api,
      title: "Brew Dog API",
      description:
        "I've used React to build out a front end that will display the results of a call to the Brew Dog API. Users can search, filter using a number of options and view information on each beer.",
      languages: ["React", "SASS", "Restful API"],
      code: "https://github.com/AndyBowerman/punk-api-project",
      site: "https://andybowerman.github.io/punk-api-project/",
    },
    {
      image: snake,
      title: "Snake Game",
      description:
        "Based on snake from the early 2000s, this game allows you to select a difficulty level and records your high score. ",
      languages: ["HTML", "SASS", "JavaScript"],
      code: "https://github.com/AndyBowerman/JS-Snake-Game",
      site: "https://andybowerman.github.io/JS-Snake-Game/",
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
  );
};

export default WorkContainer;
