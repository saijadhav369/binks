import React from 'react';
import { Zap } from 'lucide-react';
import { RewardMultiplier } from '../../types/rewards';

interface MultiplierCardProps {
  multiplier: RewardMultiplier;
}

export function MultiplierCard({ multiplier }: MultiplierCardProps) {
  return (
    <div className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="flex items-start space-x-4">
        <div className="bg-green-100 p-2 rounded-lg">
          <Zap className="h-6 w-6 text-green-600" />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">{multiplier.name}</h3>
            <span className="text-green-600 font-bold">{multiplier.multiplier}</span>
          </div>
          <p className="mt-2 text-sm text-gray-600">{multiplier.description}</p>
          <p className="mt-1 text-xs text-gray-500">{multiplier.conditions}</p>
        </div>
      </div>
    </div>
  );
}
