import React, { useState, useEffect } from "react";
import "./Modal.css";

const Modal = ({ isOpen, onClose, mainImage, images }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentImage, setCurrentImage] = useState({
    src: mainImage,
    comment: "Main image description", // Default description
  });

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => setIsVisible(true), 10); // Delay for animation to kick in
    } else {
      setIsVisible(false);
    }
  }, [isOpen]);

  const handleBackdropClick = (e) => {
    if (e.target.classList.contains("modal-backdrop")) {
      setIsVisible(false); // Trigger fade-out animation
      setTimeout(() => onClose(), 300); // Close after animation completes
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className={`modal-backdrop ${isVisible ? "show" : ""}`}
      onClick={handleBackdropClick}
    >
      <div className={`modal ${isVisible ? "show" : ""}`}>
        {/* Main Image and Description Section */}
        <div className="modal-main-content">
          <div className="modal-main-image-container">
            <img
              src={currentImage.src}
              alt="Main"
              className="modal-main-image"
            />
          </div>
          <div className="modal-main-description">
            <p>{currentImage.comment}</p>
          </div>
        </div>

        {/* Thumbnails Section */}
        <div className="modal-images">
          {images.map((item, index) => (
            <div
              key={index}
              className="modal-image-container"
              onClick={() => setCurrentImage(item)} // Update main image and comment
              style={{ cursor: "pointer" }}
            >
              <img src={item.src} alt={`Thumbnail ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Modal;
