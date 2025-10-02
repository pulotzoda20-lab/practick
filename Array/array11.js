function sumEvenIndexElements(arr) {
  let sum = 0; 

  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      sum += arr[i];
    }
  }
  return sum; 
}

const myNumbers = [1, 2, 3, 4, 5]; 
const totalSum = sumEvenIndexElements(myNumbers);

console.log(totalSum);