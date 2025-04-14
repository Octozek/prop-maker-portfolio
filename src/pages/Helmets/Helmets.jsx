import React, { useState } from "react";
import PageLayout from "../../components/PageLayout";
import Card from "../../components/Card";
import Modal from "../../components/Modal";
import helmetsData from "./helmetsData";

const Helmets = () => {
  const [selectedHelmet, setSelectedHelmet] = useState(null);

  const closeModal = () => setSelectedHelmet(null);

  return (
    <PageLayout title="Helmet Collection">
      {helmetsData.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
          {helmetsData.map((helmet) => (
            <Card
              key={helmet.id}
              image={helmet.mainImage}
              title={helmet.title}
              onClick={() => setSelectedHelmet(helmet)}
            />
          ))}
        </div>
      ) : (
        <p className="text-gray-400 text-lg mt-10">
          No helmets available at the moment. Please check back later.
        </p>
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
    </PageLayout>
  );
};

export default Helmets;
