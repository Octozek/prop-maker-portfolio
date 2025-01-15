import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Main from "./pages/Main/Main";
import All from "./pages/All/All";
import Masks from "./pages/Masks/Masks";
import Helmets from "./pages/Helmets/Helmets";
import Sculptures from "./pages/Sculptures/Sculptures";
import Backdrops from "./pages/Backdrops/Backdrops";
import "./index.css";

// Optional: Scroll to top on route change
import ScrollToTop from "./components/ScrollToTop";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Main />} />           {/* Home Page */}
        <Route path="/all" element={<All />} />         {/* All Creations */}
        <Route path="/masks" element={<Masks />} />     {/* Masks */}
        <Route path="/helmets" element={<Helmets />} /> {/* Helmets */}
        <Route path="/sculptures" element={<Sculptures />} /> {/* Sculptures */}
        <Route path="/backdrops" element={<Backdrops />} />   {/* Backdrops */}
        
        {/* 404 Fallback Route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
