import './Button.scss';

const Button = ({text, name}) => {
  return (
    <button className={name}>{text}</button>
  )
}

export default Button