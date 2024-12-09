import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { RewardsSection } from "./components/rewards/RewardsSection";
import { Contact } from "./components/Contact";
import { AuthPage } from "./components/auth/AuthPage";
import DepositWaste from "./components/DepositWaste";
import { WalletProvider } from "./context/WalletContext";

// Wrapper Component for Navbar
const AppWithNavbar = () => {
  const location = useLocation();
  const shouldShowNavbar = location.pathname !== "/";

  return (
    <div className="min-h-screen bg-gray-900">
      {shouldShowNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/hero" element={<Hero />} />
        <Route path="/deposit-waste" element={<DepositWaste />} />
        <Route path="/features" element={<Features />} />
        <Route path="/rewards" element={<RewardsSection />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

// App Component with Router and WalletProvider
export default function AppWrapper() {
  return (
    <WalletProvider>
      <Router>
        <AppWithNavbar />
      </Router>
    </WalletProvider>
  );
}
