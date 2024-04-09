import React from "react";
import "./EnlargeImage.scss";

const EnlargeImage = ({ selectedImage, onClose, selectedOpen }) => {
  return (
    <div className="enlarged">
      <div className="enlarged-image">
        {selectedImage && (
          <div className="enlarged-image_content">
            <img className="img" src={selectedImage} alt="Enlarged" />
          </div>
        )}{" "}
        <div className="enlarged-image_header" onClick={onClose}>
          <p className="x">&times;</p>
        </div>
      </div>
    </div>
  );
};

export default EnlargeImage;
