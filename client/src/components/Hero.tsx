import React from 'react';
import { ArrowRight, Recycle, Cpu, Bitcoin } from 'lucide-react';
import { Navbar } from './Navbar'; // Import Navbar component

export function Hero() {
  return (
    <>
      <Navbar /> {/* Add the Navbar component here */}
      <div className="min-h-screen pt-20 bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl font-bold text-gray-900 leading-tight">
                Sustainable Future Through
                <span className="text-green-600"> Smart Technology</span>
              </h1>
              <p className="text-xl text-gray-600">
                Join us in revolutionizing waste management with AI, ML, and blockchain technology.
                Make a difference while earning rewards.
              </p>
              <div className="flex space-x-4">
                {/* Removed Get Started Button */}
                <button className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-full hover:bg-green-50 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <Recycle className="h-10 w-10 text-green-600 mb-4" />
                <h3 className="font-semibold text-lg mb-2">Smart Recycling</h3>
                <p className="text-gray-600">AI-powered waste sorting and management</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow mt-8">
                <Cpu className="h-10 w-10 text-blue-600 mb-4" />
                <h3 className="font-semibold text-lg mb-2">ML Integration</h3>
                <p className="text-gray-600">Advanced pattern recognition</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <Bitcoin className="h-10 w-10 text-yellow-600 mb-4" />
                <h3 className="font-semibold text-lg mb-2">Blockchain Rewards</h3>
                <p className="text-gray-600">Earn tokens for recycling</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
