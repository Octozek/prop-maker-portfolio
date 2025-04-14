import React from "react";
import { FaEnvelope, FaPhoneAlt, FaUser } from "react-icons/fa";
import { HiClipboardCopy } from "react-icons/hi";
import PageLayout from "../../components/PageLayout";

const Contact = () => {
  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    alert(`Copied: ${text}`);
  };

  return (
    <PageLayout title="">
      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center py-16 px-8">
        <h1 className="text-4xl font-bold text-white mb-6">Contact Me</h1>
        <p className="text-lg text-center mb-8 max-w-xl">
          I would love to hear from you! Feel free to reach out using the
          following information.
        </p>

        {/* Contact Info */}
        <div className="flex flex-col items-center gap-6">
          {/* Name */}
          <div className="flex items-center gap-4">
            <FaUser className="text-blue-400 text-2xl" />
            <span className="text-lg">Ezekiel Owens</span>
          </div>

          {/* Email */}
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-blue-400 text-2xl" />
            <span className="text-lg">octozek@gmail.com</span>
            <button
              onClick={() => handleCopy("octozek@gmail.com")}
              className="text-blue-400 hover:text-blue-500 transition"
            >
              <HiClipboardCopy className="text-xl" />
            </button>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-4">
            <FaPhoneAlt className="text-blue-400 text-2xl" />
            <span className="text-lg">618-449-1486</span>
            <button
              onClick={() => handleCopy("618-449-1486")}
              className="text-blue-400 hover:text-blue-500 transition"
            >
              <HiClipboardCopy className="text-xl" />
            </button>
          </div>
        </div>

        {/* Decorative Icons */}
        <div className="mt-12 flex gap-8">
          <div className="flex items-center justify-center w-20 h-20 bg-gray-800 rounded-full shadow-lg">
            <FaEnvelope className="text-blue-400 text-4xl" />
          </div>
          <div className="flex items-center justify-center w-20 h-20 bg-gray-800 rounded-full shadow-lg">
            <FaPhoneAlt className="text-blue-400 text-4xl" />
          </div>
          <div className="flex items-center justify-center w-20 h-20 bg-gray-800 rounded-full shadow-lg">
            <FaUser className="text-blue-400 text-4xl" />
          </div>
        </div>
      </main>
    </PageLayout>
  );
};

export default Contact;
