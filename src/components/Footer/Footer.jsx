import "./Footer.scss";
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";

const Footer = () => {
  return (
    <div className="footer">
        <a href="https://github.com/AndyBowerman" rel="noreferrer" target="_blank" className="footer__github">
            <img src={github} alt="Github Logo" className="footer__img" />
        </a>
        <a href="https://uk.linkedin.com/in/andy-bowerman-686104133?trk=people-guest_people_search-card" target="_blank" rel="noreferrer" className="footer__linkedin">
            <img src={linkedin} alt="Linkedin Logo" className="footer__img" />
        </a>
    </div>
  )
}

export default Footer