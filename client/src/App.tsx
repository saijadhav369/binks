import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { RewardsSection } from './components/rewards/RewardsSection';
import { Contact } from './components/Contact';
import { AuthPage } from './components/auth/AuthPage';

function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gray-900">
      {location.pathname !== '/' && <Navbar />}
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/hero" element={<Hero />} />
        <Route path="/features" element={<Features />} />
        <Route path="/rewards" element={<RewardsSection />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
