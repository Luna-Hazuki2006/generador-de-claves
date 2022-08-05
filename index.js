const symbols = "@#$%"
const numbers = "0123456789"
const lowerLetters = "abcdefghijklmnopqrstuvwxyz"
const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

// buscamos el elemento del boton
const generatePasswordBtn = document.getElementById("generate-password-btn")

generatePasswordBtn?.addEventListener('click', () => {

    // obtenemos el valor de cada select
    const passwordLengthSelect = document.getElementById('password-length')
    const checkSymbolsSelect = document.getElementById('check-symbols')
    const checkNumbersSelect = document.getElementById('check-numbers')
    const checkLowerCaseSelect = document.getElementById('check-lowercase')
    const checkUpperCaseSelect = document.getElementById('check-uppercase')
    const checkPreferencesSelect = document.getElementById('check-preferences')


    if (!checkSymbolsSelect.checked && !checkNumbersSelect.checked && !checkLowerCaseSelect.checked && !checkUpperCaseSelect.checked) {
        // en caso de que ninguna opción este selecionada, mostramos un error
        alert('Debe seleccionar al menos una opción')
        return
    }

    let charsToSelect = ""

    if (checkSymbolsSelect.checked) {
        charsToSelect += symbols
    }

    if (checkNumbersSelect.checked) {
        charsToSelect += numbers
    }

    if (checkLowerCaseSelect.checked) {
        charsToSelect += lowerLetters
    }

    if (checkUpperCaseSelect.checked) {
        charsToSelect += upperLetters
    }

    let password = ''
    const length = parseInt( passwordLengthSelect.value )

    for (let index = 0; index < length; index++) {

        // seleccionamos un character random de charsToSelect
        const char = charsToSelect.charAt(Math.floor(Math.random() * charsToSelect.length))

        // agregamos ese character al password
        password += char
    }

    // mostrar el password en el input al final
    const passwordInputElement = document.getElementById("password")
    passwordInputElement.value = password

    // guardar preferencias

})


const init = () => {
    // cargar preferencias
}

init()