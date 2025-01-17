import React, { useState } from "react";
import PageLayout from "../../components/PageLayout";
import Card from "../../components/Card";
import Modal from "../../components/Modal";
import PageTransition from "../../components/PageTransition"; // Import PageTransition
import masksData from "./masksData";

const Masks = () => {
  const [selectedMask, setSelectedMask] = useState(null);

  const closeModal = () => setSelectedMask(null);

  return (
    <PageTransition> {/* Smooth transition wrapper */}
      <PageLayout title="Masks Collection">
        {masksData.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
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
          <p className="text-gray-400 text-lg mt-10">
            No masks available at the moment. Please check back later.
          </p>
        )}

        {selectedMask && (
          <Modal
            isOpen={!!selectedMask}
            onClose={closeModal}
            mainImage={selectedMask.mainImage}
            mainImageComment={selectedMask.mainImageComment}
            images={selectedMask.images}
          />
        )}
      </PageLayout>
    </PageTransition>
  );
};

export default Masks;
