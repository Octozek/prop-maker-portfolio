import React from "react";
import Header from "./Header";

const PageLayout = ({ children, title }) => {
  return (
    <div className="min-h-screen bg-[#1a1b1e] text-gray-200 flex flex-col">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-start px-6 py-8 w-full max-w-7xl mx-auto">
        {title && (
          <h1 className="text-3xl font-bold text-white mb-6">
            {title}
          </h1>
        )}
        {children}
      </main>
      <footer className="py-4 text-sm text-gray-500 text-center">
        © {new Date().getFullYear()} Ezekiel Owens. All rights reserved.
      </footer>
    </div>
  );
};

export default PageLayout;
