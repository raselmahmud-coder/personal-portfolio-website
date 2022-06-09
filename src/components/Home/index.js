import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import Logo from "./Logo";
import "./index.scss";

const Home = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  const nameArray = "Rasel".split("");
  const jobArray = "Full Stack".split("");
  const interestArray = "JavaScript".split("");
  const enthusiastArray = "Engineer".split("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={interestArray}
              idx={22}
            />

            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={enthusiastArray}
              idx={22}
            />
          </h1>
          <h2>Full Stack Developer / JavaScript Engineer / Quick Learner</h2>
          <Link
            to="/contact"
            className="flat-button"
            style={{ marginRight: "5px" }}
          >
            CONTACT ME
          </Link>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://drive.google.com/file/d/1_-Z9ZCreCDpGLM-pNxWC4d5TjbxjcJ8B/view?usp=sharing"
            className="flat-button"
          >
            RESUME
          </a>
        </div>
        <Logo />
      </div>

      <Loader type="pacman" />
    </>
  );
};

export default Home;
