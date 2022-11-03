import Skill from "../../components/Skill/Skill";
import "./SkillsContainer.scss";
import bem from "../../assets/bem.svg";
import css from "../../assets/css.svg";
import git from "../../assets/git.svg";
import html from "../../assets/html.svg";
import java from "../../assets/java.svg";
import js from "../../assets/js.svg";
import react from "../../assets/react.svg";
import sass from "../../assets/sass.svg";
import springboot from "../../assets/springboot.svg";

const SkillsContainer = () => {

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

    const renderSkills = skills.map((item, index) => <Skill key={index} image={item.image} text={item.text} />)
  return (
    <div className="skills-container">
        {renderSkills}
    </div>
  )
}

export default SkillsContainer