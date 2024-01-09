export default function updateUniqueItems(groceryMap) {
    // Check if the argument is a Map
    if (!(groceryMap instanceof Map)) {
      throw new Error('Cannot process');
    }
  
    // Iterate through the entries and update the quantity for items with initial quantity 1
    for (const [item, quantity] of groceryMap) {
      if (quantity === 1) {
        groceryMap.set(item, 100);
      }
    }
  
    return groceryMap;
  }