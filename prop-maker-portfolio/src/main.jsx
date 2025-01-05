import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import All from "./pages/All/All";
import Masks from "./pages/Masks/Masks";
import Helmets from "./pages/Helmets/Helmets";
import Sculptures from "./pages/Sculptures/Sculptures"; // Import Sculptures component
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<All />} />
        <Route path="/masks" element={<Masks />} />
        <Route path="/helmets" element={<Helmets />} />
        <Route path="/sculptures" element={<Sculptures />} /> {/* Use lowercase path */}
      </Routes>
    </Router>
  </React.StrictMode>
);
