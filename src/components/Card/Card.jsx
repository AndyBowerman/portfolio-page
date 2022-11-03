import './Card.scss';
import Button from "../Button/Button";

const Card = ({image, title, description, languages, name, code, site}) => {

    const renderLanguages = languages.map((item, index) => <li key={index} className="card__item">{item}</li>)

  return (
    <div className={name}>
        <a href={site} target="_blank" rel="noreferrer">
          <img className="card__image" src={image} alt={title} />
        </a>        
        <div className="card__container">
          <h4 className="card__header">{title}</h4>
          <p className="card__text">{description}</p>
          <ul className="card__list">{renderLanguages}</ul>
          <a href={site} target="_blank" rel="noreferrer">
            <Button name="card__button" text="Visit Site" />
          </a>
          <a href={code} target="_blank" rel="noreferrer">
            <Button name="card__button" text="View Source Code" />
          </a>            
        </div>
        
    </div>
  )
}

export default Card