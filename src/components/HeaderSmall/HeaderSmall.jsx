import "./HeaderSmall.scss";

const HeaderSmall = ({text}) => {
  return (
    <div className="header-small">
        <h1 className="header-small__header">{text}</h1>
        <div className="header-small__decoration--left"></div>
        <div className="header-small__decoration--right"></div>
    </div>
  )
}

export default HeaderSmall