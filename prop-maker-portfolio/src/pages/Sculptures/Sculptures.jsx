import React, { useState } from "react";
import Header from "../../components/Header";
import Card from "../../components/Card";
import Modal from "../../components/Modal";
import sculpturesData from "./SculpturesData";

const Sculptures = () => {
  const [selectedSculpture, setSelectedSculpture] = useState(null);

  const closeModal = () => {
    setSelectedSculpture(null);
  };

  return (
    <div>
      <Header />
      {sculpturesData.length > 0 ? (
        <div className="cards-container">
          {sculpturesData.map((sculpture, index) => (
            <Card
              key={index}
              image={sculpture.mainImage}
              title={sculpture.title}
              onClick={() => setSelectedSculpture(sculpture)}
            />
          ))}
        </div>
      ) : (
        <p>No sculptures available at the moment. Please check back later.</p>
      )}

      {selectedSculpture && (
        <Modal
          isOpen={!!selectedSculpture}
          onClose={closeModal}
          mainImage={selectedSculpture.mainImage}
          mainImageComment={selectedSculpture.mainImageComment}
          images={selectedSculpture.images}
        />
      )}
    </div>
  );
};

export default Sculptures;
