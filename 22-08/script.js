const btn = document.querySelector('#save-btn');
const form = document.querySelector('form');

btn.addEventListener('click', () => {
    const elements = form.elements;

    Array.from(elements).forEach(element => {
        const name = element.name;
        const value = element.value;
        console.log(name, value);
    });
});
