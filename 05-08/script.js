// 1) Составьте программу, которая принимает с клавиатуры числа,
//    пока не будет введено значение 99. Программа должна подсчитать,
//    сколько чисел было введено с клавиатуры (не считая значения 99)
//    и вывести эту информацию на экран.
//    ввод: 59, 74, 48, 70, 99 ⇒ вывод: кол-во чисел - 4

// let count = 0;

// const showCountNumbers = () => {
//     let num = +prompt("Введите число");

//     if (num !== 99) {
//         count++;
//         showCountNumbers();
//     } else {
//         alert(count);
//     }
// };

// showCountNumbers();


// const arr = [4, 3, 5, 7, 5];
// const found = arr.find(elem => elem > 5);

// console.log(found);


// const arr = ['Nick', 'Frank', 'Joe', 'Nick'];
// const foundIndex = arr.findIndex(elem => elem === 'Frank');
// console.log(foundIndex);

// const arr = ['Nick', 'Frank', 'Joe', 'Nick'];
// const foundIndex = arr.indexOf('Joe');
// console.log(foundIndex);

// const arr = [5, 6, 7, 8, 9];
// arr.splice(0, 0, 'hello', 'JS');
// console.log(arr);

const fruits = ['Банан', 'Апельсин', 'Лимон', 'Яблоко', 'Манго'];
const newFruits = fruits.slice(0, 2);
fruits.splice(0, 2);
console.log(newFruits);