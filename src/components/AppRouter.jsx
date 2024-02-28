import React from "react";
import { Route, Routes } from "react-router-dom";
import Converter from "../routes/Converter";

export function AppRouter() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Converter />} />
        <Route path="/converter" element={<Converter />} />
      </Routes>
    </div>
  );
}

export default AppRouter;
