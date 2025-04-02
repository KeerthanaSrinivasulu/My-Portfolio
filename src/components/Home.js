// import React from "react";
// import profilePic from "../assets/profile.jpg"; 

// function Home() {
//   return (
//     <home className="home">
//       <img src={profilePic} alt="Keerthana M Srinivasulu" className="profile-pic" />
//       <div className="intro">
//         <h2>Welcome to My Portfolio</h2>
//         <p>
//         Frontend Developer | Software Engineer 
//         </p>
//       </div>
//     </home>
//   );
// }

// export default Home;

import React from "react";
import profilePic from "../assets/profile.jpg"; 

function Home() {
  return (
    <div className="home-container">
      <div className="profile-section">
        <img src={profilePic} alt="Keerthana M Srinivasulu" className="profile-pic" />
      </div>
      <div className="intro-section">
        <h1>Hi, I'm Keerthana Mahalakshmi Srinivasulu</h1>
        <p>
          A passionate <strong>Software Engineer and Frontend Developer</strong> with expertise in <strong>React.js, UI design</strong>, and a keen eye for creating intuitive and engaging user experiences.
          With 3+ years of experience, I specialize in building scalable and performant applications.
        </p>
        <p> 
          Beyond coding, I love photography and capturing stunning visuals with my iPhone.
        </p>
        <div className="cta-buttons">
          <a href="https://www.linkedin.com/in/keerthana20/" target="_blank" rel="noopener noreferrer" className="btn linkedin-btn">LinkedIn</a>
          <a href="Keerthana_M_Srinivasulu_Software_Engineer.pdf" 
   download="Keerthana_M_Srinivasulu_Software_Engineer.pdf" 
   className="btn resume-btn">
   Download Resume
</a>
        </div>
      </div>
    </div>
  );
}

export default Home;
