let form = document.querySelector('.form')
let button = document.querySelector('.button')

button.addEventListener('click', onSubmit)

function onSubmit() {
    if (form.checkValidity() == false) {
    console.log('falta coisa')
}
}
