/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
  faPython,
} from "@fortawesome/free-brands-svg-icons";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.scss";

const About = () => {
  const aboutArray = "About Me".split("");

  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={aboutArray}
              idx={15}
            />
          </h1>
          <p >
            👋 Hi, I'm @Rasel Mahmud a JavaScript Developer. 💞️ I Have 2 Years
            + Experience as a Web Designer at Fiverr And I'm Working With Many
            Clients, got a level one seller badge at Fiverr.
            <br />
            🌱 I Have Powerful Experience In:
            <li> JavaScript ES6 including DOM manipulation</li>
            <li> React JS, Node JS, Express JS, MongoDB</li>
            <li> CRUD operation using RESTful APIs</li>
            <li> WordPress theme customization</li>
            <li> TailWind, It's components library eg. Flowbit, DaisyUI</li>
            <li>
              Bootsrap, It's components library, eg. React-bootstrap, Reactstrap
            </li>
            <li> HTML5, CSS3</li>
            <li> Familiar with Firebase, Heroku, Figma, Photoshop</li>
           
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faPython} color="#4B8BBE" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default About;
