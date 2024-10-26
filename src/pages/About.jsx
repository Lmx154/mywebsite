import React from "react";
import "./About.css";
import resume from "../assets/resume.pdf"; // Import the PDF file

function About() {
  return (
    <div className="about" id="about">
      <div className="about-content">
        <h1>About Me</h1>
        <p>
          Hi, I&apos;m Luis Martinez. I am a software developer. I enjoy
          building applications and learning new technologies.
        </p>
        <p>
          Here is my resume. You can also{" "}
          <a href={resume} download>
            download it here
          </a>
          .
        </p>
      </div>
      <div className="resume-container">
        <div className="responsive-iframe">
          <iframe src={resume} title="Resume"></iframe>
        </div>
      </div>
    </div>
  );
}

export default About;
