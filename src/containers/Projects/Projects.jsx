import ProjectTile from "../../components/ProjectTile/ProjectTile";
import "./Projects.scss";
import punk from "../../assets/brewdog/api-punk-project.png";
import beers from "../../assets/brewdog/beers.png";
import infoPage from "../../assets/brewdog/info-page.png";
import hangman from "../../assets/hangman/hang-man.png";
import gamePlay from "../../assets/hangman/game-play.png";
import snake from "../../assets/snake/snake-project.png";
import play from "../../assets/snake/play.png";
import code from "../../assets/snake/code.png";
import coursology from "../../assets/coursology/coursology.png";
import addCourse from "../../assets/coursology/add-course.png";
import courses from "../../assets/coursology/courses.png";
import personalApp from "../../assets/weather-app/Homepage.png";
import weather from "../../assets/weather-app/weather.png";
import toDo from "../../assets/weather-app/todo.png";
import propertyTracker from "../../assets/property-tracker/sign-in.png";
import propertyTrackerTwo from "../../assets/property-tracker/home.png";
import propertyTrackerThree from "../../assets/property-tracker/create-listing.png";

const Projects = ({ getProject }) => {
  const projects = [
    {
      image: [propertyTracker, propertyTrackerTwo, propertyTrackerThree],
      title: "Property Tracker",
      description:
        "A property application allowing users full CRUD functionality to list properties for sale/rent specific to their log in details.",
      languages: ["React", "Firebase", "SASS"],
      code: "https://github.com/AndyBowerman/property-tracker-app",
      site: "https://andybowerman.github.io/property-tracker-app/",
    },
    {
      image: [personalApp, weather, toDo],
      title: "Personal Application",
      description:
        "This page contains a weather app displaying the users current location with the option to search other locations and a to do list.",
      languages: ["React", "SASS", "weatherapi.com"],
      code: "https://github.com/AndyBowerman/personal-app",
      site: "https://andybowerman.github.io/personal-app/",
    },
    {
      image: [coursology, courses, addCourse],
      title: "Coursology",
      description:
        "This full stack project represents a universities content management system. Courses and teachers can be created, updated and deleted and are stored in the database and displayed in the site.",
      languages: ["React", "SASS", "Java", "Spring Boot", "MySQL"],
      code: "https://github.com/AndyBowerman/Courseology-Full-Stack-Project",
      site: "",
    },
    {
      image: [gamePlay, hangman, gamePlay],
      title: "Hangman",
      description:
        "Play Hangman in the console, users can select a difficulty level which will alter the length of the word to be guessed.",
      languages: ["Java"],
      code: "https://github.com/AndyBowerman/Hang-Man-2",
      site: "",
    },
    {
      image: [punk, infoPage, beers],
      title: "Brew Dog API",
      description:
        "I've used React to build out a front end that will display the results of a call to the Brew Dog API. Users can search, filter using a number of options and view information on each beer.",
      languages: ["React", "SASS", "Restful API"],
      code: "https://github.com/AndyBowerman/punk-api-project",
      site: "https://andybowerman.github.io/punk-api-project/",
    },
    {
      image: [snake, play, code],
      title: "Snake Game",
      description:
        "Based on snake from the early 2000s, this game allows you to select a difficulty level and records your high score. ",
      languages: ["HTML", "SASS", "JavaScript"],
      code: "https://github.com/AndyBowerman/JS-Snake-Game",
      site: "https://andybowerman.github.io/JS-Snake-Game/",
    },
  ];
  const renderProjects = projects?.map((project, index) => (
    <ProjectTile
      key={index}
      project={project}
      getProject={getProject}
    />
  ));

  return (
    <div className="projects">
      <div className="projects__dec"></div>
      <div className="projects__container">{renderProjects}</div>
    </div>
  );
};

export default Projects;
