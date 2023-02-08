import Button from "../../components/Button/Button";
import "./Headline.scss";
import { Link } from "react-router-dom";
import portrait from "../../assets/portrait2.jpg";
import DownwardArrow from "../../components/DownwardArrow/DownwardArrow";


const Headline = () => {
  return (
    <div className="headline">
      <div className="headline__container">
        <div className="headline__container--text">
          <h1 className="headline__header--main">Hi, I'm Andy Bowerman</h1>
          <div className="headline__header-dec"></div>
          <div className="headline__header-dec headline__header-dec--btm"></div>
          <h2 className="headline__header--secondary">
            I'm a <span className="headline__text-dec">software developer</span>{" "}
            based in Bristol
          </h2>
          <div className="headline__header-dec-two"></div>
          <Link to="/my-work" className="headline__link">
            <Button text="View my Work" name="headline__button" />
          </Link>
        </div>
        <div className="headline__container--img">
          <div className="headline__decoration--top"></div>
          <div className="headline__decoration--bottom"></div>
          <img className="headline__portrait" src={portrait} alt="Portrait" />
        </div>
      </div>
      
      <div className="headline__dec"></div>
      <div className="headline__container--arrow">
        <DownwardArrow text="About Me" page="about" />
      </div>
    </div>
  );
};

export default Headline;
