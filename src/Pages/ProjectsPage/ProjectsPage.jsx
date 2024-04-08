import "./ProjectsPage.scss";
import data from "../../data/projects.json";
import { useParams } from "react-router-dom";
import { useRef, useState } from "react";
import { createPortal } from "react-dom";
import ReactPlayer from "react-player";
import EnlargeImage from "../../components/EnlargeImage/EnlargeImage";
import Steam from '../../assets/icons/steamicon.png';
import { HiUserGroup } from "react-icons/hi";

function ProjectsPage() {
  const { index } = useParams();
  const project = data[index];
  const playerRef = useRef(null);
  const [selectedOpen, setSelectedOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);


  //handle selected image click
  const handleImageClick = (img) => {
    setSelectedImage(img);
    setSelectedOpen(true);
  };

  const handleClose = () => {
    setSelectedOpen(false);
  };
  const steam = project.steam

  return (
    <div className="project">
      <div className="project-banner">
        <img className="project-banner_img" alt="banner" src={project.banner} />
      </div>
      <div className="project-details">
        <ReactPlayer
          className="player"
          ref={playerRef}
          url={project.video}
          controls={true}
          width="100%"
          height="450px"
        />
        <div className="project-details_links">
        <a href={steam}>
        <div className="project-details_steam">
          <img src={Steam} alt="steam" className="steam"/>
          <h3>{project.title} on steam</h3>
        </div>
        </a>
        <div className="project-details_links-team">
          <img alt="engine" src={project.engine} className="engine-image"/>
          <div className="users">
          <HiUserGroup className="userteam"/>
          <p className="numberteam">{project.team}</p>
        </div>
        </div>
        </div>
        <div className="project-details_info">
          <p className="project-details_info-description">
            {project.description}
          </p>
          <h4 className="project-details_info-skills">
            During this project, I developed the following skills:
          </h4>
          <p className="project-details_info-skills_title">DESIGN</p>
          <ul className="project-details_info-skills_list">
            {project.design.map((item, index) => (
              <li key={index}>{item.skill}</li>
            ))}
          </ul>
          <p className="project-details_info-skills_title">COMMUNICATION</p>
          <ul className="project-details_info-skills_list">
            {project.communication.map((item, index) => (
              <li key={index}>{item.skill}</li>
            ))}
          </ul>
          <p className="project-details_info-skills_title">TECH</p>
          <ul className="project-details_info-skills_list">
            {project.tech.map((item, index) => (
              <li key={index}>{item.skill}</li>
            ))}{" "}
          </ul>
        </div>
        <div className="project-details_images">
          <ul className="project-details_images-list">
            {project.contents.map((contents, index) => (
              <li className="list" key={index}>
                <img
                className="image"
                  alt="project"
                  src={contents.img}
                  onClick={() => handleImageClick(contents.img)}
                />
                <div className="overlay"></div>
              </li>
            ))}
          </ul>
          {selectedOpen &&
            createPortal(
              <EnlargeImage
                selectedImage={selectedImage}
                onClose={handleClose}
                selectedOpen={selectedOpen}
              />,
              document.body
            )}
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;
