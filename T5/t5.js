'use strict';
function sortArray(numbers, order) {
  let sortedArray = [...numbers];
  if (order === 'asc') {
    sortedArray.sort((a, b) => a - b);
  } else if (order === 'desc') {
    sortedArray.sort((a, b) => b - a);
  }
  return sortedArray;
}
console.log(sortArray([5, 2, 8, 1, 9], 'asc'));
console.log(sortArray([5, 2, 8, 1, 9], 'desc'));
