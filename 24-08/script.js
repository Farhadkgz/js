const form = document.querySelector('#registration-form')

const getFormValue1 = (event) => {
    event.preventDefault();
   
    const name = document.querySelector('[name="name"]').value;
    const surname = document.querySelector('[name="surname"]').value;
    const msg = document.querySelector('[name="msg"]').value;
    const lang = document.querySelector('[name="lang"]').value;

    const values = {
        name, surname, msg, lang
    }

    console.log(values);
}

const getFormValue2 = (event) => {
    event.preventDefault();

    const elems = document.querySelectorAll('input, select, textarea');
    const values = {};

    elems.forEach(field => {
        const {name, value} = field;

        values[name] = value;
    })

    console.log(values);
}

const getFormValue3 = (event) => {
    event.preventDefault();

    const {name, surname, lang, msg} = form;

    const values = {
        name:name.value,
        surname:surname.value,
        lang:lang.value,
        msg:msg.value
    }
    console.log(values);
}

const getFormValue4 = (event) => {
    event.preventDefault();

    const elements = form.elements;
    const values = {};

    for(let i = 0; i < elements.length; i++){
        const formElement = elements[i];
        const name = elements[i].name;

        if(name){
            values[name] = formElement.value;
        }
    }

    console.log(values);
}

form.addEventListener('submit', getFormValue4)