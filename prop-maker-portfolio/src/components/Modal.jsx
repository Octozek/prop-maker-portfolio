import React, { useState, useEffect } from "react";
import "./Modal.css";

const Modal = ({ isOpen, onClose, mainImage, mainImageComment, images }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentImage, setCurrentImage] = useState({
    src: mainImage,
    comment: mainImageComment || "Main image description", // Use passed comment or default
  });
  const [magnifierStyle, setMagnifierStyle] = useState({ display: "none" });

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => setIsVisible(true), 10);
    } else {
      setIsVisible(false);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsVisible(false);
        setTimeout(() => onClose(), 300);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const handleBackdropClick = (e) => {
    if (e.target.classList.contains("modal-backdrop")) {
      setIsVisible(false);
      setTimeout(() => onClose(), 300);
    }
  };

  const handleMouseEnter = () => {
    setMagnifierStyle((prev) => ({ ...prev, display: "block" }));
  };

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;
    const xPercent = (offsetX / rect.width) * 100;
    const yPercent = (offsetY / rect.height) * 100;

    setMagnifierStyle({
      display: "block",
      backgroundImage: `url(${currentImage.src})`,
      backgroundSize: `${rect.width * 4}px ${rect.height * 4}px`, // 4x zoom level
      backgroundPosition: `${xPercent}% ${yPercent}%`,
      left: `${offsetX - 75}px`,
      top: `${offsetY - 75}px`,
    });
  };

  const handleMouseLeave = () => {
    setMagnifierStyle({ display: "none" });
  };

  const allImages = [
    { src: mainImage, comment: mainImageComment || "Main image description" },
    ...images.filter((img) => img.src !== mainImage), // Avoid duplicates
  ];

  if (!isOpen) return null;

  return (
    <div
      className={`modal-backdrop ${isVisible ? "show" : ""}`}
      onClick={handleBackdropClick}
    >
      <div
        className={`modal ${isVisible ? "show" : ""}`}
        role="dialog"
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        {/* Main Content: Image and Description */}
        <div className="modal-main-content">
          <div
            className="modal-main-image-container"
            onMouseEnter={handleMouseEnter}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src={currentImage.src}
              alt="Main"
              className="modal-main-image"
              onError={(e) => (e.target.src = "/assets/fallback-image.jpg")}
            />
            <div className="magnifier" style={magnifierStyle}></div>
          </div>
          <div className="modal-main-description">
            <p id="modal-description">{currentImage.comment}</p>
          </div>
        </div>
        {/* Thumbnails Section */}
        <div className="modal-images">
          {allImages.map((item, index) => (
            <div
              key={index}
              className="modal-image-container"
              onClick={() => setCurrentImage(item)}
              style={{ cursor: "pointer" }}
            >
              <img
                src={item.src}
                alt={`Thumbnail ${index + 1}`}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Modal;
