import "../style/Footer.css";
import gs_logo from "../images/gs_logo.png";
import linkedin from "../images/linkedin.png";
import github from "../images/github.png";

export const Footer = () => {
  return (
    <>
      <div className="sticky-bottom footer-position d-flex flex-row w-100 justify-content-between align-items-end">
        <div className=" footer footer-left">&copy; Giorgio Savron</div>
        <div className=" footer footer-right">
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
              href="https://github.com/gsavr/Trivia-challenge-react.git"
              target="_blank"
              rel="noreferrer"
            >
              <img src={github} alt="github" className="ficon" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
