const numbers = [1, 2, 3, 4, 5, -1, -2];

const negativeNumbers = numbers.filter(num => num * num > 0);

console.log(negativeNumbers);