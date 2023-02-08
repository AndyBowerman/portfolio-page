import './ProjectTile.scss';

const ProjectTile = ({project, getProject}) => {
  return (
    <div className='project-tile'>
      <img src={project.image[0]} alt={project.title} className="project-tile__img" />
      <div className="project-tile__dec"></div>
      <h1 className='project-tile__title'>{project.title}</h1>
      <button className='project-tile__button' onClick={() => getProject(project)}>View Project</button>
    </div>
  )
}

export default ProjectTile
