'use strict';

let numbers = [];

do {
  let input = prompt('Syötä numero tai lopeta syöttämällä muuta:');
  if (input === null || isNaN(input)) break;
  numbers.push(Number(input));
} while (true);

let evenNumbers = [];
for (let number of numbers) {
  if (number % 2 == 0) {
    evenNumbers.push(number);
  }
}
document.getElementById('kohde').innerHTML =
  'Parilliset numerot: ' + evenNumbers.join(', ');

alert('Ohjelma loppui');
