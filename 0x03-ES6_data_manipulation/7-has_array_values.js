export default function hasValuesFromArray(set, array){
    // Checks if all elements in the array exist in the set
  return array.every(element => set.has(element));

}