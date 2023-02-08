import "./AboutMe.scss";
import remoteWorking from "../../assets/remote-working.jpg";
import code from "../../assets/code.jpg";
import DownwardArrow from "../../components/DownwardArrow/DownwardArrow";

const AboutMe = () => {
  return (
    <div className="about-me" id="about">
      <div className="about-me__dec"></div>
      <div className="about-me__container">
        <p className="about-me__text">
          Over the past year and a half, I’ve dedicated myself to learning how
          to code in pursuit of my first role in the industry. After spending 10
          months working in my spare time to learn the basics of HTML, CSS and
          JavaScript I turned to the _nology bootcamp to expand into some more
          modern technologies. <br /> <br />
          The course ran full time for 12 weeks and covered React, Java and
          Spring along with various unit testing libraries and Git. I've learnt
          an enormous amount with _nology, working in Java to create my own
          API's and delving further into React than I'd covered before. I also
          learnt to work in an agile way, pair programming in sprints whilst
          presenting to real clients weekly to deliver our client project. I've
          learnt to use GIT in a much more professional way and how to solve my
          own problems using stack overflow and other resources online.
        </p>
        <img className="about-me__code" src={code} alt="Code editor" />
      </div>

      <div className="about-me__container about-me__container--bottom">
        <img
          className="about-me__working"
          src={remoteWorking}
          alt="Work space"
        />
        <p className="about-me__text">
          During this time, I’ve discovered a passion for creating attractive,
          clean, simple websites. I’ve created back-ends with Firebase and used
          Bootstrap and Material UI to style projects. I have my sights set on
          becoming a full-stack developer that can work in both the front and
          back end and continue to develop my abilities with Java. <br /> <br />
          I'm in no doubt that I've made the right decision and I'm looking
          forward to developing further. On this page you'll find a full list of
          the tech stack I've covered as well as links to my projects. If you
          have any questions, please don't hesitate to get in touch.
        </p>
      </div>
      <div className="about-me__arrow">
        <DownwardArrow text="Skills" page="skills" />
      </div>
    </div>
  );
};

export default AboutMe;
