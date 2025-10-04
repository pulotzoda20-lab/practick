function sumDigits(number) {
  let sum = 0;
  let currentNumber = Math.abs(number); // Работаем с абсолютным значением числа

  while (currentNumber > 0) {
    const digit = currentNumber % 10; // Получаем последнюю цифру
    sum += digit; // Добавляем цифру к сумме
    currentNumber = Math.floor(currentNumber / 10); // Убираем последнюю цифру
    // Или можно использовать: currentNumber = Math.trunc(currentNumber / 10);
  }
  return sum;
}

let myNumber = 12345;
console.log(`Сумма цифр числа ${myNumber} равна ${sumDigits(myNumber)}`); 

let anotherNumber = 987;
console.log(`Сумма цифр числа ${anotherNumber} равна ${sumDigits(anotherNumber)}`); 