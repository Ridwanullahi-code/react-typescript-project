import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Data from "./pages/Data";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/data" element={<Data />} />
      </Routes>
    </div>
  );
}

export default App;
