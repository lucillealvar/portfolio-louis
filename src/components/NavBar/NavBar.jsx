import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.scss";
import projectsData from "../../data/projects.json";

function NavBar() {

  return (
    <div className="nav">
      <Link to={"/"} className="nav-bar">
        HOME
      </Link>
      <div className="nav-professional ">
        <div className="dropdown">
          <span className="dropdown-toggle">PROFESSIONAL PROJECTS</span>
          <div className="dropdown-options">
            {projectsData.map((project, index) => (
              <Link
                to={`/projects/${index}`}
                key={index}
                className="nav-bar option"
              >
                {project.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="nav-personal">
        <div className="dropdown">
          <span className="dropdown-toggle">PERSONAL PROJECTS</span>
          <div className="dropdown-options">
            {/* Render options only for Unity and Unreal Engine */}
            <Link to={`/personal-projects/unity`} className="nav-bar option">
              Unity Engine
            </Link>
            <Link to={`/personal-projects/unreal`} className="nav-bar option">
              Unreal Engine
            </Link>{" "}
          </div>
        </div>
      </div>
      <Link to={"/about"} className="nav-bar">
        ABOUT
      </Link>
    </div>
  );
}

export default NavBar;
