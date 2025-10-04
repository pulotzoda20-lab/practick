function countDigits(number) {
  // Обрабатываем случай отрицательных чисел, беря их по модулю
  let num = Math.abs(number);
  let count = 0;

  // Проверяем, является ли число нулем (одна цифра)
  if (num === 0) {
    return 1;
  }

  // Цикл while, пока число больше нуля
  while (num > 0) {
    // Убираем последнюю цифру, округляя вниз
    num = Math.floor(num / 10);
    // Увеличиваем счетчик
    count++;
  }

  return count;
}

// Примеры использования
console.log(countDigits(12345)); // Выведет: 5
console.log(countDigits(0));     // Выведет: 1
console.log(countDigits(-987));  // Выведет: 3