import React from "react";
import Education from "./Education";
import Skills from "./Skills";
import WorkExperience from "./WorkExperience";

function About() {
  const workExperiences = [
    { company: "RAMP GROUP", title: "Software Engineer Intern", duration: "Dec 2024 - Current" },
    { company: "Outlier", title: "AI Code Validator", duration: "Nov 2024 - Current" },
    { company: "ISWAD", title: "Front End Developer", duration: "May 2024 - Nov 2024" },
    { company: "Mphasis Pvt Ltd, Chennai, India", title: "Associate Software Engineer", duration: "March 2021 - July 2022" },
    { company: "Mammal Digital", title: "UI Designer", duration: "Aug 2020 - Feb 2021" },
  ];

  return (
    <div>
      <Skills />
    <div className="about-container">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <div className="info-section">
          <Education />
        </div>
        <div className="experience-section">
          <WorkExperience experiences={workExperiences} />
        </div>
      </div>
    </div>
    </div>
  );
}

export default About;
