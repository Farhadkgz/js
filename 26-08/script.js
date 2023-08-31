const form = document.querySelector('#registration-form');

const getFormValue1 = (event) =>{
    event.preventDefault();

    const formData = new FormData(form);

    const values = Object.fromEntries(formData.entries());

    console.log(values);
}

const getFormValue2 = (event) => {
    event.preventDefault();

    const values = {};

    for(let field of form){
        let {name, value} = field;

        if(name){
            values[name] = value;
        }
    }

   const json = JSON.stringify(values);
   const obj = JSON.parse(json);
   console.log(obj);
}

form.addEventListener('submit', getFormValue2);



