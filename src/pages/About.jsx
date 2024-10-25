import React from "react";
import "./About.css";
import resume from "../assets/resume.pdf"; // Import the PDF file

function About() {
  return (
    <div className="about">
      <div className="resume-container">
        <div className="responsive-iframe">
          <iframe src={resume} title="Resume"></iframe>
        </div>
      </div>
      <div className="about-content">
        <h1>About Me</h1>
        <p>
          Hi, I&apos;m Luis Martinez. I am a software developer. I enjoy
          building web applications and learning new technologies.
        </p>
        <p>
          Below is my resume. You can also{" "}
          <a href={resume} download>
            download it here
          </a>
          .
        </p>
      </div>
    </div>
  );
}

export default About;
