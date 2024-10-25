import profilePic from "../assets/profile.jpg"; // Add your profile picture to the assets folder
import "./Home.css"; // Import the CSS file

function Home() {
  return (
    <div className="home">
      <div className="home-content">
        <div className="home-text">
          <h1>Welcome to My Portfolio</h1>
          <p>Hi, I'm Luis Martinez, a passionate developer.</p>
          <div className="links">
            <a
              href="https://github.com/Lmx154"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/luis-martinez-1174b8199/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
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
