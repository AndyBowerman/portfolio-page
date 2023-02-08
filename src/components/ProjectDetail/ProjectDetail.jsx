import "./ProjectDetail.scss";

const ProjectDetail = ({ getProject, project }) => {
  const renderTech = project.languages?.map((tech, index) => (
    <li className="project-detail__item" key={index}>
      {tech}
    </li>
  ));
  return (
    <div className="project-detail">
      <button className="project-detail__close" onClick={() => getProject({})}>
        X
      </button>
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
                Visit Site
              </a>
              <a
                className="project-detail__link"
                href={project.code}
                target="_blank"
                rel="noreferrer"
              >
                Source Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
