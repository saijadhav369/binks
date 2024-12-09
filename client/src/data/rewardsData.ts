import { RewardItem, RewardMultiplier } from '../types/rewards';
import { Bottle, Box, Newspaper, Wine, Coffee, ShoppingBag, Utensils } from 'lucide-react';

export const rewardItems: RewardItem[] = [
  {
    name: 'Plastic Bottle',
    ecoCoins: 10,
    unit: '500ml',
    description: 'Clean and uncrushed PET bottles',
    category: 'recyclable',
    icon: 'Bottle'
  },
  {
    name: 'Aluminum Can',
    ecoCoins: 15,
    unit: 'per can',
    description: 'Empty and rinsed aluminum beverage cans',
    category: 'recyclable',
    icon: 'Beer'
  },
  {
    name: 'Paper',
    ecoCoins: 5,
    unit: 'per kg',
    description: 'Clean paper, magazines, and newspapers',
    category: 'recyclable',
    icon: 'Newspaper'
  },
  {
    name: 'Glass Bottle',
    ecoCoins: 20,
    unit: 'per bottle',
    description: 'Clean glass bottles without caps',
    category: 'recyclable',
    icon: 'Wine'
  },
  {
    name: 'Cardboard Box',
    ecoCoins: 8,
    unit: 'per kg',
    description: 'Flattened cardboard boxes',
    category: 'recyclable',
    icon: 'Box'
  },
  {
    name: 'Styrofoam Cup',
    ecoCoins: 2,
    unit: 'per cup',
    description: 'Clean styrofoam cups and containers',
    category: 'non-recyclable',
    icon: 'Coffee'
  },
  {
    name: 'Plastic Bag',
    ecoCoins: 1,
    unit: 'per bag',
    description: 'Single-use plastic bags',
    category: 'non-recyclable',
    icon: 'ShoppingBag'
  },
  {
    name: 'Plastic Utensils',
    ecoCoins: 1,
    unit: 'per item',
    description: 'Single-use plastic cutlery',
    category: 'non-recyclable',
    icon: 'Utensils'
  }
];

export const rewardMultipliers: RewardMultiplier[] = [
  {
    name: 'Bulk Deposit Bonus',
    description: 'Earn extra EcoCoins when depositing large quantities',
    multiplier: 1.5,
    conditions: 'Minimum 50 items per deposit'
  },
  {
    name: 'Glass Bottle Day',
    description: 'Double EcoCoins for glass bottle recycling',
    multiplier: 2.0,
    conditions: 'Every Wednesday'
  },
  {
    name: 'Weekend Warrior',
    description: 'Extra rewards for weekend recycling',
    multiplier: 1.25,
    conditions: 'Saturday and Sunday only'
  }
];