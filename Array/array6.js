const numbers = [1, 2, 3, 4, 5, -1, -2];

const negativeNumbers = numbers.filter(num => num < 0);
const count = negativeNumbers.length;

console.log(count); 