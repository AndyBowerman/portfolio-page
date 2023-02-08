import "./ContactInfo.scss";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import RoomIcon from "@mui/icons-material/Room";

const ContactInfo = () => {
  return (
    <ul className="contact-info">
      <li className="contact-info__item">
        <div className="contact-info__icon">
          <RoomIcon sx={{ fontSize: 40 }} />
        </div>
        Old Market, Bristol
      </li>
      <li className="contact-info__item">
        <div className="contact-info__icon">
          <EmailIcon sx={{ fontSize: 40 }} />
        </div>
        andy_bowerman06@hotmail.com
      </li>
      <li className="contact-info__item">
        <div className="contact-info__icon">
          <CallIcon sx={{ fontSize: 40 }} />
        </div>
        07712 295051
      </li>
    </ul>
  );
};

export default ContactInfo;
