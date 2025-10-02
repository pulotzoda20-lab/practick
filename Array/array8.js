const numbers = [1, 2, 3, 4, 5];

const evenNumbers = numbers.filter(number => number % 2 === 0);
const countOfEven = evenNumbers.length;

console.log(countOfEven);