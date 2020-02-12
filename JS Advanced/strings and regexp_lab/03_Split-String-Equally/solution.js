let button = document.querySelector('input[type=button]');
let resultArea = document.getElementById('result');

window.addEventListener('DOMContentLoaded', () => {
    button.addEventListener('click', eventHandler);
});

function eventHandler(e) {
    e.preventDefault();

    let text = document.getElementById('text').value;
    let num = document.getElementById('number').value;
    
    splitString(text, num);

}

function splitString(str, num) {
    let stringLength = str.length;

    while (stringLength % num !== 0) {
        stringLength++;
    }

    let symbolsToAdd = len - str.length;
    let result = str + str.substring(0, symbolsToAdd);
    let output = splitStringToGroups(result, num);

    resultArea.textContent = output;

}

function splitStringToGroups(result, groupLength) {
    return result.match(new RegExp('.{' + groupLength + '}', 'g')).join(' ');
}


//Solution for judge. Add onclick="solve()" to the input tag with type='button'

// function solve() {
//     let text = document.getElementById('text').value;
//     let num = document.getElementById('number').value;
//     let resultArea = document.getElementById('result');

//     function splitString(str, num) {
//         let len = str.length;

//         while (len % num !== 0) {
//             len++;
//         }

//         let symbolsToAdd = len - str.length;

//         let result = str + str.substring(0, symbolsToAdd);

//         let output = splitStringToGroups(result, num);

//         resultArea.textContent = output;

//     }

//     splitString(text, num);

//     function splitStringToGroups(result, groupLength) {
//         return result.match(new RegExp('.{' + groupLength + '}', 'g')).join(' ');
//     }
// }