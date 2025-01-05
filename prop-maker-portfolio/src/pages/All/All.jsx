import React, { useState } from "react";
import Header from "../../components/Header";
import Card from "../../components/Card";
import Modal from "../../components/Modal";
import masksData from "../Masks/masksData";
import helmetsData from "../Helmets/helmetsData";
import SculpturesData from "../Sculptures/SculpturesData";

const All = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  // Combine masks and helmets data
  const allItems = [
    ...masksData.map((item) => ({ ...item, category: "Mask" })), // Add category for masks
    ...helmetsData.map((item) => ({ ...item, category: "Helmet" })), // Add category for helmets
    ...SculpturesData.map((item) => ({ ...item, category: "Sculptures" })), // Add category for Sculptures
  ];

  // Close modal handler
  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <div>
      <Header />
      {allItems.length > 0 ? (
        <div className="cards-container">
          {allItems.map((item, index) => (
            <Card
              key={index}
              image={item.mainImage}
              title={`${item.title} (${item.category})`}
              onClick={() => setSelectedItem(item)}
            />
          ))}
        </div>
      ) : (
        <p>No creations available at the moment. Please check back later.</p>
      )}

      {selectedItem && (
        <Modal
          isOpen={!!selectedItem}
          onClose={closeModal}
          mainImage={selectedItem.mainImage}
          mainImageComment={selectedItem.mainImageComment}
          images={selectedItem.images}
        />
      )}
    </div>
  );
};

export default All;
