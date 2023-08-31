// 1) Напишите функцию при вызове которой начинается обратный отсчёт от 10 до 1 с интервалом в 1 секунду.
// Когда отсчёт достигнет 1, должно появиться сообщение "Время истекло!".

// const counter = () => {
//     let count = 10;

//     const intervalId = setInterval(() => {
//         console.log(count);

//         if(count === 1) {
//             clearInterval(intervalId);
//             console.log('Время истекло');
//         }

//         count--;
//     }, 1000);
// }

// counter();

// const logo = document.getElementById('logo');
// const links = document.getElementsByTagName('a');

// for(i = 0; i < links.length; i++){
//     console.log(links[i]);
// }


// const menu = document.getElementsByClassName('menu');
// console.log(menu);

// const elem = document.querySelector('.menu a');
// console.log(elem);

// const elems = document.querySelectorAll('.menu a')
// console.log(elems);

// const logo_box = document.querySelector('.logo');
// const new_logo = '<img id="logo" src="https://mega24.kg/build/images/logo.3ba4fc31.svg">';
// logo_box.innerHTML = new_logo;

// const menu = document.querySelector('.menu');
// menu.outerHTML = '<a href="#">Личный кабинет</a>';

const ul = document.querySelector('ul');
console.log(ul.textContent);


