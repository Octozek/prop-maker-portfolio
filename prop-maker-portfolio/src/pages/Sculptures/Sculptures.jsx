import React, { useState } from "react";
import PageLayout from "../../components/PageLayout";
import Card from "../../components/Card";
import Modal from "../../components/Modal";
import sculpturesData from "./SculpturesData";

const Sculptures = () => {
  const [selectedSculpture, setSelectedSculpture] = useState(null);

  const closeModal = () => setSelectedSculpture(null);

  return (
    <PageLayout title="Sculpture Collection">
      {sculpturesData.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
          {sculpturesData.map((sculpture) => (
            <Card
              key={sculpture.id}
              image={sculpture.mainImage}
              title={sculpture.title}
              onClick={() => setSelectedSculpture(sculpture)}
            />
          ))}
        </div>
      ) : (
        <p className="text-gray-400 text-lg mt-10">
          No sculptures available at the moment. Please check back later.
        </p>
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
    </PageLayout>
  );
};

export default Sculptures;
