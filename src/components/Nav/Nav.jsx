import './Nav.scss';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className="nav">
      <ul className='nav__list'>
        <Link to="/" className='nav__link'>
          <li className='nav__item'>Home</li>
        </Link>
        <Link to="/about" className='nav__link'>
          <li className='nav__item'>About Me</li>
        </Link>
        <Link to="/skills" className='nav__link'>
          <li className='nav__item'>Skills</li>
        </Link>
        <Link to="/my-work" className='nav__link'>
          <li className='nav__item'>My Work</li>
        </Link>
        <Link to="/contact" className='nav__link'>
          <li className='nav__item'>Contact</li>
        </Link>       
      </ul>
    </div>
  )
}

export default Nav