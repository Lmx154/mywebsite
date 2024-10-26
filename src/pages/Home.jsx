import React from "react";
import profilePic from "../assets/profile.jpg";
import githubIcon from "../assets/github.svg";
import linkedinIcon from "../assets/linkedin.svg";
import "./Home.css";

function Home() {
  return (
    <div className="home" id="home">
      <div className="home-content">
        <div className="home-text">
          <h1 className="typing-animation">Welcome to My Portfolio</h1>
          <p>Hi, I&apos;m Luis Martinez, a passionate developer.</p>
          <div className="links">
            <a
              href="https://github.com/Lmx154"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-button"
            >
              <img src={githubIcon} alt="GitHub" className="icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/luis-martinez-1174b8199/"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-button"
            >
              <img src={linkedinIcon} alt="LinkedIn" className="icon" />
            </a>
          </div>
        </div>
        <div className="home-image">
          <img src={profilePic} alt="Profile" className="profile-pic" />
        </div>
      </div>
    </div>
  );
}

export default Home;
