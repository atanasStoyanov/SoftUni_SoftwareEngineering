// This will not work in Judge as I changed the HTML. 
// To work in judge remove eventListner and add onclick = "growingWord()" to the button in the HTML and move all functions under growingWord function

function calculateFontSize(size) {
  size = Number(size.replace('px', ''));
  return size * 2 + 'px';
}

function setTextColor(text, color) {
  text.style.color = color;
}

function setFontSize(text, size) {
  text.style.fontSize === '' ? text.style.fontSize = '2px' : text.style.fontSize = calculateFontSize(size);
}

function growingWord() {
  let word = document.querySelector("#exercise > p");

  if (word === null) {
    throw new Error("Error...");
  }

  let wordColor = word.style.color;
  let wordSize = word.style.fontSize;

  if (wordColor === '' && wordSize === '') {

    setTextColor(word, 'blue');
    setFontSize(word, wordSize);

  } else if (wordColor === 'red') {

    setTextColor(word, 'blue');
    setFontSize(word, wordSize);

  } else if (wordColor === 'blue') {

    setTextColor(word, 'green');
    setFontSize(word, wordSize);

  } else if (wordColor === 'green') {

    setTextColor(word, 'red');
    setFontSize(word, wordSize);

  }

}

document.addEventListener('DOMContentLoaded', x => {
  document
    .getElementById('button')
    .addEventListener('click', growingWord);
});

