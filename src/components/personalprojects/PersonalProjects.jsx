import React from "react";
import "./PersonalProjects.scss";
import { Link } from "react-router-dom";
import unitylogo from "../../assets/icons/Unity_2021.svg.png";
import unreallogo from "../../assets/icons/1425334231-unreal-engine-logo.png";

function PersonalProjects({ personal }) {
  // Separate Unity and Unreal Engine projects
  const unityProjects = personal.filter(project => project.engine === "unity");
  const unrealProjects = personal.filter(project => project.engine === "unreal");

  return (
    <div className="personal">
      <div className="personal-title">
        <h1>PERSONAL WORK</h1>
      </div>
      <div className="personal-projects">
        {/* Unity Projects */}
        <div className="unity-projects personal">
          <img alt="unity" src={unitylogo} className="engine-logo"/>
          <ul className="personal-projects_list">
            {unityProjects.map((project, index) => (
              <li key={index}>
                <div className="img">
                  {/* Anchor link to scroll to the project */}
                  <Link to={`/personal-projects/unity/${index}`}>
                    <img src={project.image} alt={project.title} />
                  </Link>
                </div>
                <h3 className="pers-title">{project.title}</h3>
              </li>
            ))}
          </ul>
        </div>
        {/* Unreal Engine Projects */}
        <div className="unreal-projects personal">
          <img alt="unreal" src={unreallogo} className="engine-logo"/>
          <ul className="personal-projects_list">
            {unrealProjects.map((project, index) => (
              <li key={index}>
                <div className="img">
                  {/* Anchor link to scroll to the project */}
                  <Link to={`/personal-projects/unreal/${index}`}>
                    <img src={project.image} alt={project.title} />
                  </Link>
                </div>
                <h3 className="pers-title">{project.title}</h3>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PersonalProjects;