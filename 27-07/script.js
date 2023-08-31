 function showMessage(msg){
     alert(msg);
 }

 showMessage('Good evening');
 showMessage('JavaScript');

 function setUserInfo(name, age){
     let user = {name, age};

     console.log(user);
}

setUserInfo('Ulan', 77);


function showSum(a = 5, b = 10){
    console.log(a);
     console.log(b);

    console.log(a + b);
 }

 showSum(12, 20);

 function display(){
     for(let i = 0; i < arguments.length; i++){
         console.log(arguments[i]);
     }

}

display(5, 6, 7, [true], {}, 'str');

 function getFullName(user){
    let result = user.name + ' ' + user.surname;
     return result;
   
 }

 const fullName= getFullName({
     name:'Bek',
     surname: 'Bekov',
     age: 45
 })

 console.log(fullName);\


function a(){
    let name = 'Bek';
    if(true){
        let name = 'Bek';
        var surname = 'Bekov';
    }
    // console.log(name);
    console.log(surname);
}

function b(){
    console.log(name);
}

a();
b();