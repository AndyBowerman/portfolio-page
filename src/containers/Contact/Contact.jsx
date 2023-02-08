import ContactInfo from "../../components/ContactInfo/ContactInfo";
import "./Contact.scss";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <h3 className="contact__header">Let's work together...</h3>
      <ContactInfo />
    </div>
  );
};

export default Contact;
