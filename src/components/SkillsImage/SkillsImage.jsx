import "./SkillsImage.scss";
import learning from "../../assets/learning.svg";

const SkillsImage = () => {
  return (
    <div className="skills-image">
        <img className="skills-image__img" src={learning} alt="Learning" />
        <div className="skills-image__decoration"></div>
    </div>
  )
}

export default SkillsImage