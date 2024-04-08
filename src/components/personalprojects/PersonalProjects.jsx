import "./PersonalProjects.scss";
import { Link } from "react-router-dom";

function PersonalProjects({ projects }) {
  return (
    <div className="personal">
      <div className="personal-title">
        <h1>PERSONAL WORK</h1>
      </div>
      <div className="personal-projects">
        <ul className="personal-projects_list">
          {projects.map((project, index) => (
            <li key={index}>
              <div className="img">
                <Link to={"/projects"}>
                  <img src={project.image} alt={project.title} />
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default PersonalProjects;
