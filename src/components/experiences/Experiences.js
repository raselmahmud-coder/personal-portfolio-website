import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import WordCloud from "../Skills/wordcloud";
import "./index.scss";
import coffee from "../../assets/images/cupofcofee.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCodeCommit,
  faCoffee,
  faDiagramSuccessor,
  faDiamondTurnRight,
} from "@fortawesome/free-solid-svg-icons";
import { faFirefoxBrowser } from "@fortawesome/free-brands-svg-icons";
const Experiences = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  const skillsArray = "Experiences".split("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <div className="container experience_page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={skillsArray}
              idx={15}
            />
            <br />
          </h1>
          <div className="showCase">
            <div className="success-item">
              <FontAwesomeIcon
                icon={faDiagramSuccessor}
                fontSize="20px"
                color="#34aadc"
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  borderRadius: "50%",
                  marginRight: "8px",
                }}
              />
              <h2 className="project-item">Level One Seller On Fiverr</h2>
            </div>
            <div className="success-item">
              <FontAwesomeIcon
                icon={faDiamondTurnRight}
                fontSize="20px"
                color="#34aadc"
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  borderRadius: "50%",
                  marginRight: "8px",
                }}
              />
              <h2 className="project-item">30+ Real world projects completed</h2>
            </div>
            <div className="success-item">
              <FontAwesomeIcon
                icon={faCodeCommit}
                fontSize="20px"
                color="#34aadc"
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  borderRadius: "50%",
                  marginRight: "8px",
                }}
              />
              <h2 className="project-item">50+ Repository on GitHub</h2>
            </div>
            <div className="success-item">
              <FontAwesomeIcon
                icon={faDiagramSuccessor}
                fontSize="20px"
                color="#34aadc"
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  borderRadius: "50%",
                  marginRight: "8px",
                }}
              />
              <h2 className="project-item">For coding 120+ sleep less nights</h2>
            </div>
          </div>
        </div>
      </div>

      <Loader type="pacman" />
    </>
  );
};

export default Experiences;
