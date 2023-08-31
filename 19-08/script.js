// const btn = document.querySelector('#btn');


// btn.addEventListener('click', changeStyle);
// function changeStyle(){
//     btn.style.width = '500px';
//     btn.style.color = 'white';
//     btn.style.fontWeight = '900px';
//     btn.style.backgroundColor = '#000';
// }


// const inputs = document.querySelectorAll('.form-group input');
// inputs.forEach((item) => {
//     item.addEventListener('change', onChangeInput)
// })


// const inputs = document.querySelectorAll('.form-group input');
// inputs.forEach((item) => {
//     item.addEventListener('input', getValue)
// })

// function getValue(e){
//     console.log(`${e.target.value.name} --- ${e.target.value}`);
// }

const inputs = document.querySelectorAll('.form-group input');
const nameInput = document.querySelector('.form-group input');
const saveBtn = document.querySelector('#save-btn');



nameInput.addEventListener('focus', () => {
    saveBtn.style.backgroundColor = 'blue';
})

nameInput.addEventListener('blur', () => {
    saveBtn.style.backgroundColor = '';
})

nameInput.addEventListener('select', () => {
    console.log('Выделение текста');
})


// Задачи на дом прочитать и выполнить код

// online
// ofline 
// resize