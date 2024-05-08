import React from "react";
import { useEffect, useRef } from "react";
import ReactPlayer from "react-player";
import './UnrealPage.scss';
import unrealBanner from "../../assets/unreal_banner.png";
import personalData from "../../data/personal.json";

function UnrealPage() {
  const unreal = personalData.filter((personal) => personal.engine === "unreal");
  const playerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when component mounts
  }, []);

  return (
    <div className="unreal">
      <div className="unreal-banner">
        <img className="unreal-banner_img" src={unrealBanner} alt={unrealBanner} />
      </div>
      <ul className="unreal-list">
        {unreal.map((personal, index) => (
          <li key={index} className="unreal-list_details">
            <ReactPlayer
              className="video"
              ref={playerRef}
              url={personal.video}
              controls={true}
              width="550px"
              height="250px"
            />
            <div className="unreal-list_details-description">
            <h3 className="unreal-list_details-description-title">{personal.title}</h3>
            <p dangerouslySetInnerHTML={{ __html: personal.description.replace(/\n/g, "<br>") }}></p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UnrealPage;
