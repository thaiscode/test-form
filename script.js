let form = document.querySelector('.form')
let button = document.querySelector('.button')
let inputs = document.querySelector('.input')
let div = document.querySelector('.div')
button.addEventListener('click', onSubmit)

function onSubmit() {
    function validate() {
        for (i = 0; i = 1; i++) {
            if (inputs[i] == "") {
                console.log = "tá vazio"
            }
        }
    }

    if (form.checkValidity() == false) {
        console.log('falta coisa')
    } else if (form.checkValidity() == true) {
        console.log('deu certo')
    }
}
