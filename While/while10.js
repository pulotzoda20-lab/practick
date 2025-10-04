function containsSeven(number) {
  let numStr = String(number); // Преобразуем число в строку
  let i = 0;
  let foundSeven = false; // Флаг для отслеживания находки "7"

  while (i < numStr.length) { // Пока не пройдены все символы строки
    if (numStr[i] === '7') { // Если текущий символ - "7"
      foundSeven = true;
      break; // Прерываем цикл, так как "7" найдена
    }
    i++; // Переходим к следующему символу
  }

  if (foundSeven) {
    console.log(`Число ${number} содержит цифру 7.`);
  } else {
    console.log(`Число ${number} не содержит цифру 7.`);
  }
}

containsSeven(12345);    // Выведет: Число 12345 не содержит цифру 7.
containsSeven(7890);     // Выведет: Число 7890 содержит цифру 7.
containsSeven(12370);    // Выведет: Число 12370 содержит цифру 7.