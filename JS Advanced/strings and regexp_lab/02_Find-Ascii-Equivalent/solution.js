let result = document.getElementById('result');
let button = document.querySelector('input[type=button]');

window.addEventListener('DOMContentLoaded', () => {
  button.addEventListener('click', eventHandler);
});

function eventHandler(e) {
  e.preventDefault();

  let text = document.getElementById('text').value;
  findASCIIEquivalent(text);
}

function findASCIIEquivalent(str) {

  let words = str
    .split(' ')
    .filter(el => !Number(el))
    .map(convertWordToASCII)
    .map(el => createAndAppendHTMLElement('p', el, result));

  let nums = str
    .split(' ')
    .filter(Number)
    .map(num => String.fromCharCode(num))
    .join('');

  createAndAppendHTMLElement('p', nums, result);

}

const convertWordToASCII = word => word
  .split('')
  .map(letter => letter.charCodeAt())
  .join(' ');

function createAndAppendHTMLElement(tag, text, parent) {
  let HTMLElement = document.createElement(tag);
  HTMLElement.textContent = text;
  parent.appendChild(HTMLElement);
}


// Solution for judge. Add onclick="solve()" to the input tag with type='button'

// function solve() {
//   let text = document.getElementById('text').value;
//   let result = document.getElementById('result');

//   const convertWordToASCII = word => word
//     .split('')
//     .map(letter => letter.charCodeAt())
//     .join(' ');

//   function createAndAppendHTMLElement(tag, text, parent) {
//     let HTMLElement = document.createElement(tag);
//     HTMLElement.textContent = text;
//     parent.appendChild(HTMLElement);
//   }

//   function findASCIIEquivalent(str) {

//     let words = str
//       .split(' ')
//       .filter(el => !Number(el))
//       .map(convertWordToASCII)
//       .map(el => createAndAppendHTMLElement('p', el, result));

//     let nums = str
//       .split(' ')
//       .filter(Number)
//       .map(num => String.fromCharCode(num))
//       .join('');

//     createAndAppendHTMLElement('p', nums, result);

//   }

//   findASCIIEquivalent(text);

// }