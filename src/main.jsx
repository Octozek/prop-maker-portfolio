import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Main from "./pages/Main/Main";
import All from "./pages/All/All";
import Masks from "./pages/Masks/Masks";
import Helmets from "./pages/Helmets/Helmets";
import Sculptures from "./pages/Sculptures/Sculptures";
import Backdrops from "./pages/Backdrops/Backdrops";
import Contact from "./pages/Contact/Contact"; // Import the Contact page
import "./index.css";

// AnimatePresence wrapper for route transitions
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Main />} />
        <Route path="/all" element={<All />} />
        <Route path="/masks" element={<Masks />} />
        <Route path="/helmets" element={<Helmets />} />
        <Route path="/sculptures" element={<Sculptures />} />
        <Route path="/backdrops" element={<Backdrops />} />
        <Route path="/contact" element={<Contact />} /> {/* Add the Contact route */}
      </Routes>
    </AnimatePresence>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <AnimatedRoutes />
    </Router>
  </React.StrictMode>
);
