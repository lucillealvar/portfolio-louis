import React from "react";
import { useEffect, useRef } from "react";
import ReactPlayer from "react-player";
import "./UnityPage.scss";
import unityBanner from "../../assets/unity_banner.png";
import personalData from "../../data/personal.json";

function UnityPage() {
  const unity = personalData.filter((personal) => personal.engine === "unity");
  const playerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when component mounts
  }, []);

  return (
    <div className="unity">
      <div className="unity-banner">
        <img className="unity-banner_img" src={unityBanner} alt={unityBanner} />
      </div>
      <ul className="unity-list">
        {unity.map((personal, index) => (
          <li key={index} className="unity-list_details">
            <ReactPlayer
              className="video"
              ref={playerRef}
              url={personal.video}
              controls={true}
              width="550px"
              height="250px"
            />
            <div className="unity-list_details-description">
            <h3 className="unity-list_details-description-title">{personal.title}</h3>
            <p dangerouslySetInnerHTML={{ __html: personal.description.replace(/\n/g, "<br>") }}></p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UnityPage;
