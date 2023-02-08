import "./Skill.scss";

const Skill = ({image, text, index}) => {
  const color = index % 2 === 0 ? "green" : "blue"
  return (
    <div className="skill" id={color}>
        <img className="skill__image" src={image} alt={text} />
        <h3 className="skill__text">{text}</h3>
    </div>
  )
}

export default Skill