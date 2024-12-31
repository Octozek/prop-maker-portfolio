import React, { useState } from "react";
import Header from "../../components/Header";
import Card from "../../components/Card";
import Modal from "../../components/Modal";
import masksData from "./masksData";

const Masks = () => {
  const [selectedMask, setSelectedMask] = useState(null);

  // Close modal handler
  const closeModal = () => {
    setSelectedMask(null);
  };

  return (
    <div>
      <Header />
      <h2>Masks</h2>
      {masksData.length > 0 ? (
        <div className="cards-container">
          {masksData.map((mask, index) => (
            <Card
              key={index}
              image={mask.mainImage}
              title={mask.title}
              onClick={() => setSelectedMask(mask)}
            />
          ))}
        </div>
      ) : (
        <p>No masks available at the moment. Please check back later.</p>
      )}

      {selectedMask && (
        <Modal
          isOpen={!!selectedMask}
          onClose={closeModal}
          mainImage={selectedMask.mainImage}
          mainImageComment={selectedMask.mainImageComment} // Pass the main image comment
          images={selectedMask.images}
        />
      )}
    </div>
  );
};

export default Masks;
