export const rewardItems = [
    {
      name: "Plastic Bottle (500ml)",
      description: "Recyclable plastic bottles of 500ml capacity.",
      ecoCoins: 2,
      unit: "per bottle",
      category: "recyclable",
      icon: "Bottle"
    },
    {
      name: "Aluminum Can",
      description: "Recyclable aluminum cans of standard size.",
      ecoCoins: 3,
      unit: "per can",
      category: "recyclable",
      icon: "Beer"
    },
    {
      name: "Paper (A4 sheet)",
      description: "Standard A4 paper sheets.",
      ecoCoins: 1,
      unit: "per sheet",
      category: "recyclable",
      icon: "FileText"
    },
    {
      name: "Glass Bottle (500ml)",
      description: "Recyclable glass bottles of 500ml capacity.",
      ecoCoins: 4,
      unit: "per bottle",
      category: "recyclable",
      icon: "Wine"
    },
    {
      name: "Cardboard Box (Small)",
      description: "Small recyclable cardboard boxes.",
      ecoCoins: 5,
      unit: "per box",
      category: "recyclable",
      icon: "Box"
    },
    {
      name: "Styrofoam Cup",
      description: "Non-recyclable styrofoam cups.",
      ecoCoins: 1,
      unit: "per cup",
      category: "non-recyclable",
      icon: "Coffee"
    },
    {
      name: "Plastic Bag (Small)",
      description: "Non-recyclable small plastic bags.",
      ecoCoins: 1.5,
      unit: "per bag",
      category: "non-recyclable",
      icon: "ShoppingBag"
    },
    {
      name: "Single-use Plastic Fork/Knife",
      description: "Non-recyclable single-use plastic cutlery.",
      ecoCoins: 1,
      unit: "per item",
      category: "non-recyclable",
      icon: "UtensilsCrossed"
    },
    {
      name: "Mixed Waste (non-sortable)",
      description: "Non-sortable mixed waste materials.",
      ecoCoins: 0.5,
      unit: "per kg",
      category: "non-recyclable",
      icon: "Trash2"
    }
  ];
  
  export const rewardMultipliers = [
    {
      name: "Weight-Based Reward",
      multiplier: "2x",
      description: "Larger quantities or heavier items yield proportional rewards.",
      conditions: "E.g., 2L plastic bottles earn double the EcoCoins of 500ml bottles."
    },
    {
      name: "Bulk Bonus",
      multiplier: "10%",
      description: "Deposit 5+ recyclable items to earn bonus rewards.",
      conditions: "Automatically applied to bulk deposits."
    },
    {
      name: "Special Event Day",
      multiplier: "2x",
      description: "Earn double EcoCoins on special event days.",
      conditions: "E.g., Glass Bottle Day, Paper Recycling Week."
    }
  ];
  