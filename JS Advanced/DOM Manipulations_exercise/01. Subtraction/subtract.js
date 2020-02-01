//To work in judge add window.onload = function () {subtract();} in a script tag in HTML and remove window eventListener

function subtract() {
    let firstInput = document.getElementById('firstNumber');
    let secondInput = document.getElementById('secondNumber');
    let resultField = document.getElementById('result');

    let firstNum = Number(firstInput.value);
    let secondNum = Number(secondInput.value);
    let result = firstNum - secondNum;

    resultField.textContent = result;
}

window.addEventListener('DOMContentLoaded', subtract)