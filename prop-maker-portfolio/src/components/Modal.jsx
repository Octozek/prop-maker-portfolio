// Modal.jsx
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const Modal = ({ isOpen, onClose, mainImage, mainImageComment, images = [], title }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-95 backdrop-blur-lg z-50 flex items-start justify-center overflow-y-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative bg-transparent text-white w-full max-w-7xl mx-4 p-0 overflow-visible mt-10"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 text-gray-400 hover:text-white text-4xl"
            >
              &times;
            </button>

            {/* Modal Header */}
            <h2 className="text-5xl font-bold mb-8 text-center text-white drop-shadow-lg">
              {title}
            </h2>

            {/* Scrollable Images and Descriptions */}
            <div className="space-y-8 px-12 pb-12">
              {[{ src: mainImage, comment: mainImageComment }, ...images].map((item, index) => (
                <div key={index} className="space-y-4">
                  <img
                    src={item.src}
                    alt={`Image ${index + 1}`}
                    className="w-full object-contain rounded-lg shadow-xl max-h-[80vh]"
                  />
                  {item.comment && (
                    <p className="text-gray-300 text-lg text-center italic">
                      {item.comment}
                      {item.link && (
                        <a
                          href={item.link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block mt-2 text-blue-400 hover:text-blue-500 underline"
                        >
                          {item.link.text}
                        </a>
                      )}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
