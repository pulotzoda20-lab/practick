function isPowerOfTwo(n) {
  // Шаг 1: обрабатываем некорректный ввод (числа меньше или равные 0)
  if (n <= 0) {
    return false;
  }

  // Шаг 2: Цикл, пока число больше 1
  while (n > 1) {
    // Шаг 3: Проверяем, делится ли число на 2 без остатка
    if (n % 2 !== 0) {
      return false; // Не делится нацело, значит, не степень двойки
    }
    // Делим число на 2
    n = n / 2;
  }

  // Шаг 4: Если дошли сюда, значит, число стало 1.
  //  Это означает, что исходное число было степенью двойки.
  return true;
}

console.log(isPowerOfTwo(1));   // true (1 = 2^0)
console.log(isPowerOfTwo(8));   // true (8 = 2^3)
console.log(isPowerOfTwo(16));  // true (16 = 2^4)
console.log(isPowerOfTwo(7));   // false
console.log(isPowerOfTwo(0));   // false
console.log(isPowerOfTwo(10));  // false  