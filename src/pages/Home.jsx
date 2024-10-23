import profilePic from "../assets/profile.jpg"; // Add your profile picture to the assets folder

function Home() {
  return (
    <div className="home">
      <h1>Welcome to My Portfolio</h1>
      <img src={profilePic} alt="Profile" className="profile-pic" />
      <p>Hi, I'm Luis Martinez, a passionate developer.</p>
      <div className="links">
        <a href="https://github.com/Lmx154" target="_blank">
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/luis-martinez-1174b8199/"
          target="_blank"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
}

export default Home;
