export interface RewardItem {
  name: string;
  ecoCoins: number;
  unit: string;
  description: string;
  category: 'recyclable' | 'non-recyclable';
  icon: string;
}

export interface RewardMultiplier {
  name: string;
  description: string;
  multiplier: number;
  conditions: string;
}