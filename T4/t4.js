'use strict';

function sortArray(numbers) {
  // Create a new array from the original to avoid mutating it
  const newArray = [...numbers];

  // Sort the new array in ascending order
  newArray.sort((a, b) => a - b);

  // Return the sorted array
  return newArray;
}
const numbers = [30, 2, 5, 200];
console.log('Alkuperäinen jono:', numbers);

const sortedNumbers = sortArray(numbers);
console.log('Järjestetty jono:', sortedNumbers);
