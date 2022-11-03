import "./Contact.scss";
import Layout from "../../containers/Layout/Layout";
import ContactInfo from "../../components/ContactInfo/ContactInfo";

const Contact = () => {
  return (
    <Layout>
        <div className="contact">
            <ContactInfo />
            <div className="contact__decoration--left"></div>
            <div className="contact__decoration--right"></div>
        </div>
    </Layout>
  )
}

export default Contact