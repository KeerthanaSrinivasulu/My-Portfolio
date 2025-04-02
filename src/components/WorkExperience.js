import React from "react";

function WorkExperience({ experiences }) {
  return (
    <section className="work-experience">
      <h2>Work Experience</h2>
      <div className="work-grid">
        {experiences.map((job, index) => (
          <div className="work-item" key={index}>
            <h3>{job.company}</h3>
            <p><strong>{job.title}</strong></p>
            <p>{job.duration}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WorkExperience;
