import React from "react";
import { Link } from "react-router-dom";
import "./ProfessionalProjects.scss";

function ProfessionalProjects({projects}) {
  return (
    <div className="professional">
      <div className="professional-title">
        <h1>PROFESSIONAL PROJECTS</h1>
      </div>
      <div className="professional-projects">
        <ul className="professional-projects_list">
          {projects && projects.map((project, index) => (
            <li key={index}>
                <div className="img">
                  <Link to={`/projects/${index}`} key={index}>
                  <img  src={project.image} alt={project.title}/>
                  </Link>
                </div>
              <h3 className="role">{project.channel}</h3>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProfessionalProjects;
