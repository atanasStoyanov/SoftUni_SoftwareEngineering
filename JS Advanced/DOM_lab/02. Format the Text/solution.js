// This will not work in Judge as I changed the HTML. 
// To work in judge remove eventListner and add "onclick" to the button in the HTML.

function solve() {
  let input = document.getElementById('input');
  let output = document.getElementById('output');

  if (input === null || output === null) {
    throw new Error('Error...');
  }

  const isNotEmptyString = str => str !== '';

  let sentences = input.innerHTML
    .split('.')
    .filter(isNotEmptyString)
    .map(e => e + '.');

  for (let i = 0; i < sentences.length; i += 3) {
    let p = document.createElement('p');
    let str = '';

    for (let j = 0; j < 3; j++) {

      if (i + j < sentences.length) {
        str += sentences[i + j];
      }
    }

    p.innerHTML = str;
    output.appendChild(p);
  }

}

document.addEventListener('DOMContentLoaded', x => {
  document
    .getElementById('formatItBtn')
    .addEventListener('click', solve);
})