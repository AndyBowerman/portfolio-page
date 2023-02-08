import "./Skills.scss";
import Skill from "../../components/Skill/Skill";
import DownwardArrow from "../../components/DownwardArrow/DownwardArrow";
import bem from "../../assets/bem.svg";
import css from "../../assets/css.svg";
import git from "../../assets/git.svg";
import html from "../../assets/html.svg";
import java from "../../assets/java.svg";
import js from "../../assets/js.svg";
import react from "../../assets/react.svg";
import sass from "../../assets/sass.svg";
import springboot from "../../assets/springboot.svg";

const Skills = () => {
    const skills = [
        {image: html, text: "HTML"},
        {image: css, text: "CSS"},
        {image: sass, text: "Sass"},
        {image: bem, text: "BEM"},
        {image: git, text: "Git"},
        {image: js, text: "JavaScript"},
        {image: react, text: "React"},
        {image: java, text: "Java"},
        {image: springboot, text: "Spring Boot"}
    ]

    const renderSkills = skills.map((item, index) => <Skill key={index} index={index} image={item.image} text={item.text} />)
  return (
    <div className="skills" id="skills">
      <div className="skills__container">
        {renderSkills}
      </div>
      <div className="skills__dec"></div>
      <DownwardArrow text="Contact Information" page="contact" />
    </div>
  );
};

export default Skills;
