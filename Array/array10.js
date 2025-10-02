const numbers = [1, 2, 3, 4, 5];

numbers.sort(function(a, b) {
  return b - a;
});

console.log(numbers);