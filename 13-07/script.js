// const new_price = 250;
// const old_price = 260;
// const result = old_price > new_price;
// console.log(result);

// const age = 17;
// const result = age < 18;
// console.log(result);

// const user = {
//     name:'Jenya',
//     age:20,
// }

// const control_age = 18;
// const result = user.age <= 18;
// console.log(result);

// const car_color = 'red';
// const car_name = 'toyota';


// const result = car_color === 'red' && car_name ==='bmw';
// console.log(result);

// 1)true + true = true;
// 2)true + false = false;
// 3)false + true = false;
// 4)false + false = false;

// const footBallPlayer = {
//     name: 'Cristiano',
//     surname: 'Ronaldo',
//     club: 'Al Nasr',
//     age:38
// }

// const r = footBallPlayer.age > 18 || footBallPlayer.club === 'Real';
// console.log(r);

// 1) true + false = true;
// 2) false + true = true;
// 3) true + true = true;
// 4) false + false = false;

// const age = 18;
// const result = !(age > 17);
// console.log(result); //true

// let name = '';
// name &&= 'Ulan';

// console.log(name);

// let count = 1;

// count &&= 6;

// console.log(count);

// const product = {
//     name:'Coca Cola',
//     price: null
// }

// product.price ??= 'нет даных';
// console.log(product);



let user_role = 'super admin';

if(user_role === 'admin'){
    alert('Добро пожаловать Администратор')
} else if(user_role === 'super admin'){
    alert('Добро пожаловать Супер Админ')
}
else{
    alert('Мы вас не знаем');
}
