function findSecondLargest(arr) {
  if (arr.length < 2) {
    return "Массив должен содержать хотя бы два элемента"; // Обработка случая с недостаточным количеством элементов
  }
  const uniqueSortedArr = [...new Set(arr)].sort((a, b) => b - a);
  if (uniqueSortedArr.length < 2) {
    return "Все элементы массива одинаковые или их меньше двух после удаления дубликатов"; // Обработка случая с одинаковыми элементами
  }
  return uniqueSortedArr[1];
}

const numbers = [10, 5, 20, 8, 15, 20];
console.log(findSecondLargest(numbers)); // Вывод: 15