export default function cleanSet(set, startString) {
    // Filter the set values that start with the specified string
    const filteredValues = Array.from(set).filter(value => value.startsWith(startString));
  
    // Append the rest of each value to the startString and join with hyphens
    const resultString = filteredValues.map(value => value.slice(startString.length)).join('-');
  
    return resultString;
  }