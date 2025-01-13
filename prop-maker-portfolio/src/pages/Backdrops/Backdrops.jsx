import React, { useState } from "react";
import Header from "../../components/Header";
import Card from "../../components/Card";
import Modal from "../../components/Modal";
import BackdropsData from "./BackdropsData";

const Backdrops = () => {
  const [selectedBackdrop, setSelectedBackdrop] = useState(null);

  // Close modal handler
  const closeModal = () => {
    setSelectedBackdrop(null);
  };

  return (
    <div>
      <Header />
      {BackdropsData.length > 0 ? (
        <div className="cards-container">
          {BackdropsData.map((backdrop) => (
            <Card
              key={backdrop.id} // Use a unique identifier
              image={backdrop.mainImage}
              title={backdrop.title}
              onClick={() => setSelectedBackdrop(backdrop)}
            />
          ))}
        </div>
      ) : (
        <p>No backdrops available at the moment. Please check back later.</p>
      )}

      {selectedBackdrop && (
        <Modal
          isOpen={!!selectedBackdrop}
          onClose={closeModal}
          mainImage={selectedBackdrop.mainImage}
          mainImageComment={selectedBackdrop.mainImageComment}
          images={selectedBackdrop.images}
        />
      )}
    </div>
  );
};

export default Backdrops;