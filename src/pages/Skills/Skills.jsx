import "./Skills.scss";
import Layout from '../../containers/Layout/Layout';
import SkillsContainer from "../../containers/SkillsContainer/SkillsContainer";

const Skills = () => {
  return (
    <Layout>
        <div className="skills">
            <SkillsContainer />
        </div>        
    </Layout>
  )
}

export default Skills