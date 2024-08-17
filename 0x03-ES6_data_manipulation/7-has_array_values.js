// Check if Set has all array values

export default function hasValuesFromArray(set, array) {
  return array.every((value) => set.has(value));
}
