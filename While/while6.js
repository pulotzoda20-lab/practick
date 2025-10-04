function findGCD(a, b) {
  // Обработка отрицательных чисел, чтобы использовать абсолютные значения
  a = Math.abs(a);
  b = Math.abs(b);

  while (b !== 0) {
    let temp = b; // Сохраняем текущее значение b
    b = a % b;    // Новое b - остаток от деления a на b
    a = temp;     // Новое a - предыдущее значение b
  }
  return a; // Когда b равно 0, a - это НОД
}

console.log(findGCD(48, 18)); 
console.log(findGCD(101, 103)); 
console.log(findGCD(30, 18)); 