import "./ContactInfo.scss";

const ContactInfo = () => {
  return (
    <ul className="contact-info">
        <li className="contact-info__item">07712295051</li>
        <li className="contact-info__item">andy_bowerman06@hotmail.com</li>
        <a className="contact-info__link" href="https://github.com/AndyBowerman" target="_blank" rel="noreferrer">
          <li className="contact-info__item">github.com/AndyBowerman</li>
        </a>
        <a className="contact-info__link" href="https://uk.linkedin.com/in/andy-bowerman-686104133?trk=people-guest_people_search-card" target="_blank" rel="noreferrer">
          <li className="contact-info__item">linkedin.com/in/andrew-bowerman-686104133</li>
        </a>        
    </ul>
  )
}

export default ContactInfo