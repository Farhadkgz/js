// const auth_btn = document.getElementById('auth-btn');

// const login = () => {
//     console.log('Ведите логин');
// }


// const logout = () => {
//     confirm('Вы хотите выйти?');
// }

// // auth_btn.onclick = login;

// // auth_btn.onclick = login;
// // auth_btn.onclick = logout;

// auth_btn.addEventListener('mousemove', login,);

// // auth_btn.addEventListener('click', logout);


const one = document.getElementById('one-div');
const two = document.getElementById('two-div');
const btn_click = document.getElementById('btn-click');

btn_click.addEventListener('click', function() {
    
  let text1 = one.innerHTML;
    let text2 = two.innerHTML;
    
    one.innerHTML = text2;
    two.innerHTML = text1;
  });



