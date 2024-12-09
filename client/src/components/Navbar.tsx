import React from 'react';
import { Leaf, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 py-4 px-6 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Leaf className="h-6 w-6 text-green-600" />
          <span className="text-xl font-bold text-gray-800">Binks</span>
        </div>
        
        {/* <div className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-gray-600 hover:text-green-600 transition-colors">About</a>
          <a href="#features" className="text-gray-600 hover:text-green-600 transition-colors">Features</a>
          <a href="#rewards" className="text-gray-600 hover:text-green-600 transition-colors">Rewards</a>
          <a href="#contact" className="text-gray-600 hover:text-green-600 transition-colors">Contact</a>
          <button className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors">
            Get Started
          </button>
        </div> */}

        <div className="hidden md:flex items-center space-x-8">
          {/* <Link to="/about" className="text-gray-600 hover:text-green-600 transition-colors">About</Link> */}
          <Link to="/features" className="text-gray-600 hover:text-green-600 transition-colors">Features</Link>
          <Link to="/rewards" className="text-gray-600 hover:text-green-600 transition-colors">Rewards</Link>
          <Link to="/contact" className="text-gray-600 hover:text-green-600 transition-colors">Contact</Link>
          <button className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors">
            Get Started
          </button>
        </div>
        
        <button className="md:hidden">
          <Menu className="h-6 w-6 text-gray-600" />
        </button>
      </div>
    </nav>
  );
}