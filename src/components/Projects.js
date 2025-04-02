import React from "react";
import projectImg1 from "../assets/Project1.jpg"; 
import projectImg2 from "../assets/Project2.JPEG";

function Projects() {
  return (
    <section className="projects">
      <h2>My Seminar Project</h2>
      <div className="project-card">
        <h3>Zero Trust Network Security</h3>
        <p><strong>Institution:</strong> Dalhousie University</p>
        <p>
        Awarded Best Project and Cash Reward for Zero Trust Network Security Portal at Dalhousie University. 
        Presented a project focusing on two-factor authentication, emphasizing enhanced security levels and secure user data storage.
        </p>
      </div>

      <div className="project-gallery">
        <img src={projectImg1} alt="Project 1" />
        <img src={projectImg2} alt="Project 2" />
        
      </div>
    </section>
  );
}

export default Projects;
