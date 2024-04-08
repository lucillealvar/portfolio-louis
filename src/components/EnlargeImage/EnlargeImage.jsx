import React from "react";
import './EnlargeImage.scss'

const EnlargeImage = ({ selectedImage, onClose, selectedOpen }) => {
  return (
    <div className="enlarged">
        <div className="enlarged-image">
        <div className="enlarged-image_header">
            <p onClick={onClose}>&times;</p>
        </div>
      {selectedImage && (
        <div className="enlarged-image_content">
          <img className="img" src={selectedImage} alt="Enlarged" />
        </div>
      )}{" "}
        </div>
    </div>
  );
};

export default EnlargeImage;
