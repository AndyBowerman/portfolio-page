import "./Nav.scss";
import { Link } from "react-router-dom";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Nav = ({ position }) => {
  return (
    <div className="nav">
      <div className="nav__container">
        <a
          href="https://github.com/AndyBowerman"
          rel="noreferrer"
          target="_blank"
          className="nav__icon"
        >
          <GitHubIcon fontSize="large" sx={{ fontSize: 40 }} />
        </a>
        <a
          href="https://uk.linkedin.com/in/andy-bowerman-686104133?trk=people-guest_people_search-card"
          target="_blank"
          rel="noreferrer"
          className="nav__icon"
        >
          <LinkedInIcon fontSize="large" sx={{ fontSize: 40 }} />
        </a>
      </div>

      <ul className="nav__list">
        <Link to="/" className="nav__link">
          <li className="nav__item">Home</li>
        </Link>
        <Link to="/my-work" className="nav__link">
          <li className="nav__item">Projects</li>
        </Link>
        <div className="nav__highlight" id={position}></div>
      </ul>
    </div>
  );
};

export default Nav;
