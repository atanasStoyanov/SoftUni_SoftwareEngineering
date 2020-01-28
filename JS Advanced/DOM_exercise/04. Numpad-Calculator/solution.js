function solve() {
    let buttons = document.getElementsByTagName('button');
    let expressionField = document.getElementById('expressionOutput');
    let resultField = document.getElementById('resultOutput');

    Array.from(buttons)
        .map(b => b.addEventListener('click', eventHandler));

    let operatorsMap = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => a / b
    }

    function calculate(str, operationsObj) {
        let operandsArr = str.match(/[\d.]+/g);
        let operatorsArr = str.match(/[+,\-,\/,\*]/g);

        if (operandsArr.length !== 2 || operatorsArr.length !== 1) {
            return NaN;
        } else {
            let leftOperand = Number(operandsArr[0]);
            let rightOperand = Number(operandsArr[1]);
            let operator = operatorsArr[0];

            return operationsObj[operator](leftOperand, rightOperand);

        }

    }

    function clearFields() {
        expressionField.innerHTML = '';
        resultField.innerHTML = '';
    }

    function eventHandler(e) {
        let expression = '';
        let pressedButton = e.target.value;

        if (operatorsMap.hasOwnProperty(pressedButton)) {
            expression += ` ${pressedButton} `;
        } else if (pressedButton === '=') {
            resultField.innerHTML = calculate(expressionField.innerHTML, operatorsMap);
        } else if (pressedButton === 'Clear') {
            clearFields();
        } else if (pressedButton !== '=') {
            expression += pressedButton;
        }

        expressionField.innerHTML += expression;
    }

}