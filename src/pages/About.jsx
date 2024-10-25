import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about">
      <h1>About Me</h1>
      <p>
        Hi, I'm Luis Martinez. I am a software developer. I enjoy building web
        applications and learning new technologies.
      </p>
      <p>My skills include:</p>
      <ul>
        <li>JavaScript</li>
        <li>React</li>
        <li>Node.js</li>
        <li>CSS</li>
        <li>C++</li>
        <li>C</li>
        <li>Python</li>
        <li>Django</li>
        <li>Django rest framework</li>
        <li>Postgres SQL</li>
        <li>MySQL</li>
        <li>Ruby</li>
        <li>Ruby on Rails</li>
        {/* Add more skills as needed */}
      </ul>
      <p>
        Below is my resume. You can also{" "}
        <a href="/src/assets/resume.pdf" download>
          download it here
        </a>
        .
      </p>
      <div className="resume-container">
        <iframe
          src="/src/assets/resume.pdf"
          width="100%"
          height="600px"
          title="Resume"
        ></iframe>
      </div>
    </div>
  );
}

export default About;
