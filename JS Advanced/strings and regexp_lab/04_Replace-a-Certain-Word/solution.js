let button = document.querySelector('input[type=button]');
let resultField = document.getElementById('result');

window.addEventListener('DOMContentLoaded', () => {
    button.addEventListener('click', eventHandler);
});

function eventHandler(e) {
    e.preventDefault();
    let replacingWord = document.getElementById('word').value;
    let text = JSON.parse(document.getElementById('text').value);

    replaceGivenWord(replacingWord, text);
}

function replaceGivenWord(word, arr) {
    let wordToBeReplaced = arr[0].split(' ')[2];
    let pattern = new RegExp('(' + wordToBeReplaced + ')', 'gmi');

    arr
        .map(str => replaceWordByPattern(str, pattern, word))
        .map(str => createAndAppendHTMLElement('p', str, resultField));
}

function replaceWordByPattern(str, pattern, replWord) {
    return str.replace(pattern, replWord);
}

function createAndAppendHTMLElement(tag, text, parent) {
    let HTMLElement = document.createElement(tag);
    HTMLElement.textContent = text;
    parent.appendChild(HTMLElement);
}


//Solution for judge. Add onclick="solve()" to the input tag with type='button'

// function solve() {
//     let replacingWord = document.getElementById('word').value;
//     let text = JSON.parse(document.getElementById('text').value);
//     let resultField = document.getElementById('result');

//     function replaceGivenWord(word, arr) {
//         let wordToBeReplaced = arr[0].split(' ')[2];
//         let pattern = new RegExp('(' + wordToBeReplaced + ')', 'gmi');
//         arr
//             .map(str => replaceWordByPattern(str, pattern, word))
//             .map(str => createAndAppendHTMLElement('p', str, resultField));

//     }

//     replaceGivenWord(replacingWord, text);


//     function replaceWordByPattern(str, pattern, replWord) {
//         return str.replace(pattern, replWord)
//     }

//     function createAndAppendHTMLElement(tag, text, parent) {
//         let HTMLElement = document.createElement(tag);
//         HTMLElement.textContent = text;
//         parent.appendChild(HTMLElement);
//     }

// }