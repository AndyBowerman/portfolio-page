import "./Skill.scss";

const Skill = ({image, text}) => {
  return (
    <div className="skill">
        <img className="skill__image" src={image} alt={text} />
        <h3 className="skill__text">{text}</h3>
    </div>
  )
}

export default Skill