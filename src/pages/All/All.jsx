import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import Card from "../../components/Card";
import Modal from "../../components/Modal";
import masksData from "../Masks/masksData";
import helmetsData from "../Helmets/helmetsData";
import SculpturesData from "../Sculptures/SculpturesData";
import backdropsData from "../Backdrops/BackdropsData";

const All = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Combine all data sources
  const allItems = [
    ...masksData.map((item) => ({ ...item, category: "Mask" })),
    ...helmetsData.map((item) => ({ ...item, category: "Helmet" })),
    ...SculpturesData.map((item) => ({ ...item, category: "Sculpture" })),
    ...backdropsData.map((item) => ({ ...item, category: "Backdrop" })),
  ];

  // Simulate loading delay (optional)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500); // 0.5 second delay
    return () => clearTimeout(timer);
  }, []);

  // Close modal handler
  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />

      <main className="flex-grow flex flex-col items-center justify-start px-6 py-8">
        {isLoading ? (
          <p className="text-gray-600 text-lg mt-10 animate-pulse">
            Loading creations...
          </p>
        ) : allItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-7xl">
            {allItems.map((item) => (
              <Card
                key={item.id || item.title}  // Prefer using a unique ID
                image={item.mainImage}
                title={item.title}
                category={item.category}  // Pass category to Card
                onClick={() => setSelectedItem(item)}
              />
            ))}
          </div>
        ) : (
          <p className="text-gray-600 text-lg mt-10">
            No items available at the moment. Please check back later.
          </p>
        )}
      </main>

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
