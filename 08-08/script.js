// const showMessage = (message, message2) => {
//     alert(message + ' ' + message2);
// }

// const id = setTimeout(showMessage, 3000, 'Hello', 'World');
// clearTimeout(id);

const updateTime = () => {
    document.getElementById('time').innerText = new Date().toTimeString();
}


const id = setInterval(updateTime, 1000);

setTimeout(clearInterval, 5000, id);