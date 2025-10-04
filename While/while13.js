function getFirstDigit(number) {
  // 1. Обработка отрицательных чисел
  number = Math.abs(number);

  // 2. Цикл while для сокращения числа
  while (number >= 10) {
    number = Math.floor(number / 10);
  }

  // 3. Первая цифра числа
  return number;
}

const num1 = 12345;
console.log(`Первая цифра числа ${num1}: ${getFirstDigit(num1)}`); // Выведет: Первая цифра числа 12345: 1

const num2 = -789;
console.log(`Первая цифра числа ${num2}: ${getFirstDigit(num2)}`); // Выведет: Первая цифра числа -789: 7

const num3 = 5;
console.log(`Первая цифра числа ${num3}: ${getFirstDigit(num3)}`); // Выведет: Первая цифра числа 5: 5