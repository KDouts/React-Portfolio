import "./Contact.scss";
import { GoMarkGithub } from "react-icons/go";
import { FaLinkedin } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";

const Contact = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <a href="https://github.com/KDouts">
        <GoMarkGithub className="sizes"></GoMarkGithub>
      </a>
      <a href="https://www.linkedin.com/in/kurtis-doute-a89745221/">
        <FaLinkedin className="sizes"></FaLinkedin>
      </a>
      <a href="https://docs.google.com/document/d/1yZ-KxDW_nMIbItmfBG2hFqMio6eC-ENEC7YEjcfk-0k/edit?usp=sharing">
        <IoDocumentText className="sizes"></IoDocumentText>
      </a>
    </div>
  );
};

export default Contact;
