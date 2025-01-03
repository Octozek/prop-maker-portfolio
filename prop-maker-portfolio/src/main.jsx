import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import All from "./pages/All/All";
import Masks from "./pages/Masks/Masks";
import Helmets from "./pages/Helmets/Helmets";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<All />} />
        <Route path="/masks" element={<Masks />} />
        <Route path="/helmets" element={<Helmets />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
