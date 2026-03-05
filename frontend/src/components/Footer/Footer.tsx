


import "./Footer.css";
import { Link } from "react-router-dom";
// import logo from "./DSAWhite-06-2.png";
import { BsInstagram, BsLinkedin, BsYoutube } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import logo from "/Images/XXIV.webp";


const Footer = () => {
  return (
    <div>
 <div className="footerMain ">
      <div className="footerContainer container1">
        <div className="footerItem1 ">
          <img
            className="footerlogo"
            src={logo}
            width="200"
            height="100"
            alt="logo"
          />
        </div>
        <div className="footerItem1 description">
          <p>
          Milan is a four-day festival that features several
            music, dance, and art performances in addition to a wide range of athletic events. Along
            with these occasions, each year, Milan hosts professional exhibitions and performances
            by prominent bands.
          </p>
        </div>
      </div>
      <div className="footerContainer container2">
        <div className="footerItem2">
          <ul>
            <li>
              <Link to="/event">Events</Link>
            </li>
          
          </ul>
        </div>
        {/* <div className="footerItem2">
          <ul>
          
            <li>
              <Link to="/faq">FAQs</Link>
            </li>
          </ul>
        </div> */}
      </div>
      <div className="footerContainer container3">
        <ul className="footerSocial">
          <li>
            <a target="_blank" rel="noreferrer" href="https://www.instagram.com/srmist_milan?igsh=Z24waXM1cGQ0YW1x">
              <BsInstagram />
            </a>
          </li>
        
        
          <li>
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/directorate-of-student-affairs-srmist-dsa">
              <BsLinkedin />
            </a>
          </li>
          <li>
            <a target="_blank" rel="noreferrer" href="https://youtube.com/@DSAEVENTS?si=XyvfIQcrIquxWRkz">
              <BsYoutube />
            </a>
          </li>
          <li>
            <a target="_blank" rel="noreferrer" href="mailto:culturalsecretary.sa@srmist.edu.in">
              <MdEmail />
            </a>
          </li>
          <li>
            <a target="_blank" rel="noreferrer" href="https://www.instagram.com/srmist_dsa?igsh=MXNwamFscGY4ejNlMg==">
              <BsInstagram />
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div>
      <p className="footerEnd">
      ©2024 | Crafted with ♡ by the Tech Team, Directorate of Student Affairs,
        SRMIST
      </p>
    </div>
    </div>
   
  );
};

export default Footer;