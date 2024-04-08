import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.scss";
import projectsData from '../../data/projects.json';

function NavBar() {
  const firstThree = projectsData.slice(0, 3);
  const restOf = projectsData.slice(3);

  return (
    <div className="nav">
      <Link to={"/"} className="nav-bar">HOME</Link>
      <div className="nav-professional ">
        <div className="dropdown">
          <span className="dropdown-toggle">PROFESSIONAL PROJECTS</span>
          <div className="dropdown-options">
            {firstThree.map((project, index) => (
              <Link to={`/projects/${index}`} key={index} className="nav-bar option">{project.title}</Link>
            ))}
          </div>
        </div>
      </div>
      <div className="nav-personal">
        <div className="dropdown">
          <span className="dropdown-toggle">PERSONAL PROJECTS</span>
          <div className="dropdown-options">
            {restOf.map((personal, index) => (
              <Link to={`/projects/${index}`} key={index} className="nav-bar option">{personal.title}</Link>
            ))}
          </div>
        </div>
      </div>
      <Link to={"/about"} className="nav-bar">ABOUT</Link>
    </div>
  );
}

export default NavBar;