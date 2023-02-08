import Headline from "../../containers/Headline/Headline";
import Layout from "../../containers/Layout/Layout";
import AboutMe from "../../containers/AboutMe/AboutMe";
import Skills from "../../containers/Skills/Skills";
import Contact from "../../containers/Contact/Contact";

const Home = () => {
  return (
    <Layout position={"home"}>
        <Headline />
        <AboutMe />
        <Skills />
        <Contact />
    </Layout>
  );
};

export default Home;
