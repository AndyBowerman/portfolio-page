import "./ProjectDetail.scss";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';
import CodeIcon from '@mui/icons-material/Code';

const ProjectDetail = ({ getProject, project }) => {
  const renderTech = project.languages?.map((tech, index) => (
    <li className="project-detail__item" key={index}>
      {tech}
    </li>
  ));
  return (
    <div className="project-detail">
      <div className="project-detail__dec"></div>
      <div className="project-detail__flex">
        <div className="project-detail__container project-detail__container--left">
          <img
            src={project.image[1]}
            alt={project.title}
            className="project-detail__img project-detail__img--left"
          />
          <h1 className="project-detail__header">{project.title}</h1>
        </div>
        <div className="project-detail__container project-detail__container--right">
          <img
            src={project.image[2]}
            alt={project.title}
            className="project-detail__img project-detail__img--right"
          />
          <div className="project-detail__text">
            <p className="project-detail__description">{project.description}</p>
            <ul className="project-detail__list">{renderTech}</ul>
            <div className="project-detail__container--link">
              <a
                className="project-detail__link"
                href={project.site}
                target="_blank"
                rel="noreferrer"
              >
                <OpenInBrowserIcon /><p className="project-detail__link-text">Visit Site</p>
              </a>
              <a
                className="project-detail__link"
                href={project.code}
                target="_blank"
                rel="noreferrer"
              >
                <CodeIcon /><p className="project-detail__link-text">Source Code</p>
              </a>
              <button
                onClick={() => getProject({})}
                className="project-detail__link project-detail__link--close"
              >
                <ArrowBackIcon /> <p className="project-detail__link-text">Return to projects</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
