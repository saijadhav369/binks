import React from 'react';
import { Brain, Leaf, Award, Shield, Globe, RefreshCcw, CloudRain, Zap } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: <Brain className="h-8 w-8 text-purple-600" />,
      title: "AI-Powered Sorting",
      description: "Advanced artificial intelligence for precise waste classification"
    },
    {
      icon: <Leaf className="h-8 w-8 text-green-600" />,
      title: "Eco Impact",
      description: "Real-time tracking of your environmental contribution"
    },
    {
      icon: <Award className="h-8 w-8 text-yellow-600" />,
      title: "Reward System",
      description: "Earn tokens for your sustainable actions"
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: "Secure Blockchain",
      description: "Transparent and immutable record of all transactions"
    },
    {
      icon: <Globe className="h-8 w-8 text-indigo-600" />,
      title: "Global Access",
      description: "Available worldwide for a connected and sustainable future"
    },
    {
      icon: <RefreshCcw className="h-8 w-8 text-teal-600" />,
      title: "Recycling Insights",
      description: "Track and analyze recycling trends in your community"
    },
    {
      icon: <CloudRain className="h-8 w-8 text-cyan-600" />,
      title: "Smart Weather Updates",
      description: "Receive localized weather forecasts for waste management planning"
    },
    {
      icon: <Zap className="h-8 w-8 text-orange-600" />,
      title: "Energy Optimization",
      description: "Efficient resource allocation to save energy and reduce waste"
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Smart Features</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover how we combine cutting-edge technology with environmental consciousness
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 bg-white rounded-xl border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
