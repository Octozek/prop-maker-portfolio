import React, { useState } from "react";
import Header from "../../components/Header";
import Card from "../../components/Card";
import Modal from "../../components/Modal";
import helmetsData from "./helmetsData";

const Helmets = () => {
  const [selectedHelmet, setSelectedHelmet] = useState(null);

  // Close modal handler
  const closeModal = () => {
    setSelectedHelmet(null);
  };

  return (
    <div>
      <Header />
      {helmetsData.length > 0 ? (
        <div className="cards-container">
          {helmetsData.map((helmet) => (
            <Card
              key={helmet.id} // Use a unique identifier
              image={helmet.mainImage}
              title={helmet.title}
              onClick={() => setSelectedHelmet(helmet)}
            />
          ))}
        </div>
      ) : (
        <p>No helmets available at the moment. Please check back later.</p>
      )}

      {selectedHelmet && (
        <Modal
          isOpen={!!selectedHelmet}
          onClose={closeModal}
          mainImage={selectedHelmet.mainImage}
          mainImageComment={selectedHelmet.mainImageComment}
          images={selectedHelmet.images}
        />
      )}
    </div>
  );
};

export default Helmets;
