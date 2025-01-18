import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./login";
import Clock from "./clock";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/clock" element={<Clock />} />{" "}
        {/* Different path for Clock */}
      </Routes>
    </BrowserRouter>
  );
}

export default App; // Ensure this is exported as the default export
