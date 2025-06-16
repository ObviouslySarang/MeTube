
import React from "react";
import Header from "./components/Header";


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroCarousel from "./components/HeroCarousel";
import HighlightsGrid from "./components/HighlightsGrid";

import Sidebar from "./components/Sidebar";
import BottomNav from "./components/BottomNav";

import AboutPage from "./pages/AboutPage";
import AchievementsPage from "./pages/AchievementsPage";

function HomePage() {
  return (
    <>
      <div className="relative">
        <HeroCarousel />
      </div>
      <HighlightsGrid />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <div className="bg-white min-h-screen text-[#282828] flex">
        <Sidebar />
        <div className="flex-1 flex flex-col min-h-screen">
          <Header />
          <main className="max-w-7xl mx-auto px-4 py-8 w-full">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/achievements" element={<AchievementsPage />} />
            </Routes>
          </main>
          <BottomNav />
        </div>
      </div>
    </Router>
  );
}
