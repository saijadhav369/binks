import React from 'react';
import * as LucideIcons from 'lucide-react';
import { RewardItem } from '../../types/rewards';

interface RewardCardProps {
  reward: RewardItem;
}

export function RewardCard({ reward }: RewardCardProps) {
  const Icon = LucideIcons[reward.icon as keyof typeof LucideIcons] || LucideIcons.Package; // Fallback icon

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center space-x-3">
            {Icon && <Icon className="h-6 w-6 text-green-600" />}
            <h3 className="text-lg font-semibold text-gray-900">{reward.name}</h3>
          </div>
          <p className="mt-2 text-sm text-gray-600">{reward.description}</p>
        </div>
        <div className="text-right">
          <span className="text-2xl font-bold text-green-600">{reward.ecoCoins}</span>
          <span className="text-sm text-gray-500 block">EcoCoins</span>
          <span className="text-xs text-gray-400">{reward.unit}</span>
        </div>
      </div>
    </div>
  );
}
