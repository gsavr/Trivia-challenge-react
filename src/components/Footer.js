import "../style/Footer.css";
import gs_logo from "../images/gs_logo.png";
import linkedin from "../images/linkedin.png";
import github from "../images/github.png";

export const Footer = () => {
  return (
    <>
      <div className="position-absolute bottom-0 start-0 footer footer-left">
        &copy; Giorgio Savron
      </div>
      <div className="position-absolute bottom-0 end-0 footer footer-right">
        <div>
          <a
            href="https://www.giorgiosavron.com"
            target="_blank"
            rel="noreferrer"
          >
            <img src={gs_logo} alt="GS_logo" className="ficon" />
          </a>
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/giorgio-savron/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedin} alt="Linkedin" className="ficon" />
          </a>
        </div>
        <div>
          <a
            href="https://github.com/gsavr/g2i-React"
            target="_blank"
            rel="noreferrer"
          >
            <img src={github} alt="github" className="ficon" />
          </a>
        </div>
      </div>
    </>
  );
};
