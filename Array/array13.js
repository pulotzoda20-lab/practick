const numbers = [1, 2, 3, 4, 5, -1, -2];

let positiveProduct = 1; 

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    positiveProduct *= numbers[i]; 
  }
}

console.log(positiveProduct); 