'use strict';

// create array
const fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi'];

console.log(fruits);
console.log('Hedelmien lukumäärä', fruits.length);
console.log(fruits[fruits.length - 1]);

const vegetables = [];

// adds 3 vegetables on for loop

for (let i = 0; i < 3; i++) {
  const vegetable = prompt('Annas vihannes:');
  vegetables.push(vegetable);
}
console.log(vegetables);
console.log(vegetables.length);
