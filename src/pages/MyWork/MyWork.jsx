import Layout from "../../containers/Layout/Layout";
import Projects from "../../containers/Projects/Projects";
import { useState } from "react";
import ProjectDetail from "../../components/ProjectDetail/ProjectDetail";

const MyWork = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [displayProject, setDisplayProject] = useState(false);

  const getProject = (project) => {
    setCurrentProject(project);
    setDisplayProject(!displayProject)
  };
  return !displayProject ? (
    <Layout position="project">
      <Projects getProject={getProject} />
    </Layout>
  ) : (
    <Layout position="project">
    <ProjectDetail getProject={getProject} project={currentProject} /></Layout>
  );
};

export default MyWork;
