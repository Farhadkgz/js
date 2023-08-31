// // function showMessage1(){
// //     alert('Hello');
// // }

// // const showMessage2 = function(){
// //     alert('hello');
// // }

// // showMessage2();
// //----------------------------------------------------------

// // варивнт1
// const sum = (a, b) => {
//     return a + b;
// }

// const result = sum(5, 9);

// console.log(result);

// //----------------------------------------------------------

// // вариант2
// const sum = (a, b) => a + b;


// const result = sum(5, 9);

// console.log(result);

// //------------------------------------------------------------

// //Вариант3
// const sum = a => a + 5;


// const result = sum(5);

// console.log(result);

// //----------------------------------------------------------

// //Вариант4

// const sum = a => {
//     a + 5;

// }


// const result = sum(5);

// console.log(result);

// //------------------------------------------------------------

// //Вариант5

// const sum = a => {
//     return a + 5;
// }


// const result = sum(5, 9);

// console.log(result);





// const numbers = [5, 6, 7];

// const newNumbers = numbers.map(function(curentValue){
//     return curentValue * 2;
// })

// const newNumbers2 = numbers.map(curentValue => curentValue * 2);


// console.log(newNumbers);
// console.log(newNumbers2);




/*

1)function(curentValue = 5){
    console.log(curenValue);
}

1)function(curentValue = 5){
    console.log(curenValue);
}

1)function(curentValue = 6){
    console.log(curenValue);
}

3)function(curentValue = 7){
    console.log(curenValue);
}

*/


// const numbers = [10, 25, 145, 50, 75];

// const filtered = numbers.filter(function(value){
//     return value > 50;


// })

// console.log(filtered);

/*
function(value){
    return value > 50;
}

function(value = 10){
    return false;
}

function(value = 25){
    return false;
}

function(value = 145){
    return true;
}

function(value = 50){
    return false;
}

function(value = 75){
    return true;
}

   


*/


const users = [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
      address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Madrid",
        zipcode: "92998-3874",
        geo: {
          lat: "-37.3159",
          lng: "81.1496"
        }
      }
    },
    {
      id: 2,
      name: "Ervin Howell",
      username: "Antonette",
      email: "Shanna@melissa.tv",
      address: {
        street: "Victor Plains",
        suite: "Suite 879",
        city: "Wisokyburgh",
        zipcode: "90566-7771",
        geo: {
          lat: "-43.9509",
          lng: "-34.4618"
        }
      }
    },
    {
      id: 3,
      name: "Clementine Bauch",
      username: "Samantha",
      email: "Nathan@yesenia.net",
      address: {
        street: "Douglas Extension",
        suite: "Suite 847",
        city: "Madrid",
        zipcode: "59590-4157",
        geo: {
          lat: "-68.6102",
          lng: "-47.0653"
        }
      },
    },
    {
      id: 4,
      name: "Patricia Lebsack",
      username: "Karianne",
      email: "Julianne.OConner@kory.org",
      address: {
        street: "Hoeger Mall",
        suite: "Apt. 692",
        city: "South Elvis",
        zipcode: "53919-4257",
        geo: {
          lat: "29.4572",
          lng: "-164.2990"
        }
      }
    },
    {
      id: 5,
      name: "Chelsey Dietrich",
      username: "Kamren",
      email: "Lucio_Hettinger@annie.ca",
      address: {
        street: "Skiles Walks",
        suite: "Suite 351",
        city: "Roscoeview",
        zipcode: "33263",
        geo: {
          lat: "-31.8129",
          lng: "62.5342"
        }
      }
    }
  ]

  const filtered = users.filter(user => {
    return user.address.city === "Madrid";
    });
    
    console.log(filtered);


