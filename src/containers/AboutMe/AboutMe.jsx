import "./AboutMe.scss";
import remoteWorking from '../../assets/remote-working.jpg';
import code from '../../assets/code.jpg';
import DownwardArrow from "../../components/DownwardArrow/DownwardArrow";

const AboutMe = () => {
  return (
    <div className="about-me" id="about">
      <div className="about-me__dec"></div>
      <div className="about-me__container">
        <p className="about-me__text">
          After completing my degree in Marketing I've spent 8 years working in
          the insurance industry, eventually working for Aviva as a distribution
          manager. During the various lockdowns in the past few years I started
          to look at the tech industry and after trying my hand at some basic
          coding courses online decided to fully invest myself in achieving a
          change of career.<br/><br/> I spent the next 10 months studying in my free time,
          focusing on the front end, working with HTML, CSS/SCSS, JavaScript and
          React. It was during this time I started to test my skills on code
          wars, solving algorithms, and this is where I truly became hooked.
          After building some projects with my newly acquired skills I started
          to search for my first role and this lead me to the _nology
          consultancy course, a 12 week program covering everything I've
          mentioned so far, plus Java and Spring Boot. So I left behind my
          career in the insurance industry and took the plunge.
        </p>
        <img className="about-me__code" src={code} alt="Code editor" />
      </div>
      
      <div className="about-me__container about-me__container--bottom">
      <img className="about-me__working" src={remoteWorking} alt="Work space" />
        <p className="about-me__text">
          I've been lucky to learn an enormous amount with _nology, working in
          Java to create my own API's and delving further into React than I'd
          covered before. I also learnt to work in an agile way, pair
          programming in sprints whilst presenting to real clients weekly to
          deliver our client project. I've learnt to use GIT in a much more
          professional way and how to solve my own problems using stack overflow
          and other resources online. <br/><br/>I'm in no doubt that I've made the right
          decision and I'm looking forward to developing further. On this page
          you'll find a full list of the tech stack I've covered as well as
          links to my projects. If you have any questions please don't hesitate
          to get in touch.
        </p>
      </div>
      <div className="about-me__arrow">
        <DownwardArrow text="Skills" page="skills" />
      </div>      
    </div>
  );
};

export default AboutMe;
