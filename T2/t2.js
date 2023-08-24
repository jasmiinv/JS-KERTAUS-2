'use strict';
const numbers = [];

// Step 2: Add user input to the array
for (let i = 0; i < 5; i++) {
  const number = parseInt(prompt('Anna numero'));
  numbers.push(number);
}

// Step 3: Display the array contents
console.log(numbers);

// Step 4: Check if a user-entered number is in the array
const checkNumber = parseInt(
  prompt('Syötä numero tarkastaessa onko luku jonossa')
);
const isIncluded = numbers.includes(checkNumber);

// Step 5: Display a message based on the includes() method result
if (isIncluded) {
  console.log(`${checkNumber} on jonossa.`);
} else {
  console.log(`${checkNumber} ei ole jonossa.`);
}

// Step 6: Remove the last number from the array
numbers.pop();

// Step 7: Display the updated array contents
console.log(numbers);

// Step 8: Sort the array in ascending order
numbers.sort((a, b) => a - b);

// Step 9: Display the sorted array contents
console.log(numbers);
