import "./Skills.scss";
import Layout from '../../containers/Layout/Layout';
import SkillsContainer from "../../containers/SkillsContainer/SkillsContainer";
import SkillsImage from "../../components/SkillsImage/SkillsImage";

const Skills = () => {
  return (
    <Layout>
        <div className="skills">
            <SkillsImage />
            <SkillsContainer />
        </div>        
    </Layout>
  )
}

export default Skills