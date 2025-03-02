import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import DVDPage from "../pages/DVDPage";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dvd/:id" element={<DVDPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
