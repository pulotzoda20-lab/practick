function findMaxDigit(number) {
  let maxDigit = 0; // Инициализируем максимальную цифру нулем
  let num = Math.abs(number); // Берем модуль числа, чтобы работать с положительным числом

  if (num === 0) { // Обработка случая, когда число равно 0
    return 0;
  }

  while (num > 0) {
    let digit = num % 10; // Получаем последнюю цифру
    if (digit > maxDigit) {
      maxDigit = digit; // Обновляем максимум, если цифра больше
    }
    num = Math.floor(num / 10); // Удаляем последнюю цифру, деля на 10
  }
  return maxDigit;
}

let inputNumber = 129357;
let max = findMaxDigit(inputNumber);
console.log(`Максимальная цифра в числе ${inputNumber} равна: ${max}`);

let inputNumber2 = 401;
let max2 = findMaxDigit(inputNumber2);
console.log(`Максимальная цифра в числе ${inputNumber2} равна: ${max2}`);