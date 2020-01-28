function solve() {
    let button = document.getElementsByTagName('button');
    let selectMenuTo = document.getElementById('selectMenuTo');
    let resultArea = document.getElementById('result');
    let input = document.getElementById('input');

    if (button === null || selectMenuTo === null || resultArea === null || input === null) {
        throw new Error('Error...');
    }

    button[0].addEventListener('click', convert);
    
    addOptionsToMenu('Binary', 'binary', selectMenuTo);
    addOptionsToMenu('Hexadecimal', 'hexadecimal', selectMenuTo);

    function addOptionsToMenu(text, val, menu) {
        let option = document.createElement('option');
        option.textContent = text;
        option.value = val;
        menu.appendChild(option);
    }


    let convertionsMap = {
        'binary': num => num.toString(2),
        'hexadecimal': num => num.toString(16).toUpperCase()
    }

    function convert() {
        let num = Number(input.value);
        let selectedOption = selectMenuTo.value
        let result = convertionsMap[selectedOption](num);

        resultArea.value = result;
    }

}