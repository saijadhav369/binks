import React, { useState, useEffect } from 'react';
import { Leaf, Menu } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

export function Navbar() {
  const [user, setUser] = useState<any>(null);  // State to store user info
  const navigate = useNavigate();

  // Fetch user info or get it from a global state (like context or redux)
  useEffect(() => {
    // Simulate fetching user data from localStorage or an API
    const userData = JSON.parse(localStorage.getItem('user') || 'null');
    setUser(userData);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    navigate('/');  // Redirect to the home page after logout
  };

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 py-4 px-6 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Leaf className="h-6 w-6 text-green-600" />
          <span className="text-xl font-bold text-gray-800">Binks</span>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          {/* Links for signed-out users */}
          <Link to="/features" className="text-gray-600 hover:text-green-600 transition-colors">Features</Link>
          <Link to="/rewards" className="text-gray-600 hover:text-green-600 transition-colors">Rewards</Link>
          <Link to="/contact" className="text-gray-600 hover:text-green-600 transition-colors">Contact</Link>

          {/* Show profile if user is signed in */}
          {user ? (
            <div className="flex items-center space-x-4">
              <span className="text-gray-600">{user.name}</span>
              <FontAwesomeIcon icon={faUserCircle} className="text-gray-600 w-8 h-8" />
              <button onClick={handleLogout} className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-colors">
                Logout
              </button>
            </div>
          ) : (
            <Link to="/" className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors">
              Get Started
            </Link>
          )}
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden">
          <Menu className="h-6 w-6 text-gray-600" />
        </button>
      </div>
    </nav>
  );
}
