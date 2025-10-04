function reverseNumber(num) {
  let reversedNum = 0;
  let originalNum = Math.abs(num); // Работаем с абсолютным значением для простоты

  while (originalNum > 0) {
    const digit = originalNum % 10; // Получаем последнюю цифру
    reversedNum = reversedNum * 10 + digit; // Добавляем цифру к новому числу
    originalNum = Math.floor(originalNum / 10); // Убираем последнюю цифру из исходного числа
  }

  // Если исходное число было отрицательным, сохраняем знак
  return num < 0 ? -reversedNum : reversedNum;
}

console.log(reverseNumber(12345)); // Выведет: 54321
console.log(reverseNumber(-987));  // Выведет: -789
console.log(reverseNumber(100));   // Выведет: 1