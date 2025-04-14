import React, { useState } from "react";
import PageLayout from "../../components/PageLayout";
import Card from "../../components/Card";
import Modal from "../../components/Modal";
import BackdropsData from "./BackdropsData";

const Backdrops = () => {
  const [selectedBackdrop, setSelectedBackdrop] = useState(null);

  const closeModal = () => setSelectedBackdrop(null);

  return (
    <PageLayout title="Backdrop Collection">
      {BackdropsData.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
          {BackdropsData.map((backdrop) => (
            <Card
              key={backdrop.id}
              image={backdrop.mainImage}
              title={backdrop.title}
              onClick={() => setSelectedBackdrop(backdrop)}
            />
          ))}
        </div>
      ) : (
        <p className="text-gray-400 text-lg mt-10">
          No backdrops available at the moment. Please check back later.
        </p>
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
    </PageLayout>
  );
};

export default Backdrops;
