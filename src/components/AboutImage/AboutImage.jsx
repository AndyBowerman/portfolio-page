import "./AboutImage.scss";
import coding from "../../assets/coding.svg";

const AboutImage = () => {
  return (
    <div className="about-image">
        <img className="about-image__img" src={coding} alt="Coding avatar" />
        <div className="about-image__decoration"></div>
    </div>
  )
}

export default AboutImage