import "./AboutMe.scss";
import Layout from "../../containers/Layout/Layout";
import AboutText from "../../components/AboutText/AboutText";
import AboutImage from "../../components/AboutImage/AboutImage";

const AboutMe = () => {  
  return (
    <Layout>
      <div className="about-me">
        <AboutImage />
        <AboutText />
      </div>
    </Layout>
  );
};

export default AboutMe;
