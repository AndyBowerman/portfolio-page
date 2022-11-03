import Button from "../Button/Button";
import "./Headline.scss";
import { Link } from 'react-router-dom';

const Headline = () => {
  return (
    <div className="headline">
        <h1 className="headline__header--main">Hi, I'm Andy Bowerman</h1>
        <h2 className="headline__header--secondary">I'm a software developer based in Bristol</h2>
        <Link to="/my-work" className="headline__link">
          <Button text="View my Work" name="headline__button"/>
        </Link>
        <div className="headline__decoration--left"></div>
        <div className="headline__decoration--right"></div>
    </div>
  )
}

export default Headline