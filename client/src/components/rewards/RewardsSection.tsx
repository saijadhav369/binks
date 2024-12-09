import React from 'react';
import { RewardCard } from './RewardCard';
import { MultiplierCard } from './MultiplierCard';
import { rewardItems, rewardMultipliers } from '../../data/rewardsData';

export function RewardsSection() {
  const recyclableItems = rewardItems.filter(item => item.category === 'recyclable');
  const nonRecyclableItems = rewardItems.filter(item => item.category === 'non-recyclable');

  return (
    <section id="rewards" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Earn EcoCoins</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Turn your waste into rewards with our innovative recycling program
          </p>
        </div>

        {/* Multiplier Cards */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Special Multipliers</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rewardMultipliers.map((multiplier, index) => (
              <MultiplierCard key={index} multiplier={multiplier} />
            ))}
          </div>
        </div>

        {/* Recyclable Items */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Recyclable Items</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recyclableItems.map((item, index) => (
              <RewardCard key={index} reward={item} />
            ))}
          </div>
        </div>

        {/* Non-Recyclable Items */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Non-Recyclable Items</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {nonRecyclableItems.map((item, index) => (
              <RewardCard key={index} reward={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
