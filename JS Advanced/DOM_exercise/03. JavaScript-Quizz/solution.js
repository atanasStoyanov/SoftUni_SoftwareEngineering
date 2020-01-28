function solve() {
  let questions = document.getElementsByClassName('answer-text');
  let sections = document.querySelectorAll('section');
  let results = document.getElementById('results');
  let resultField = document.querySelector('#results > li > h1');

  let correctAnswersMap = {
    0: 'onclick',
    1: 'JSON.stringify()',
    2: 'A programming API for HTML and XML documents'
  }

  let correctAnswers = 0;
  let i = 0;

  Array.from(questions)
    .map(q => q.addEventListener('click', eventHandler));


  function hideHTMLElement(element) {
    element.style.display = 'none';
  }

  function displayHTMLElement(element) {
    element.style.display = 'block';
  }

  function buildResult(correctAnswers, HTMLElement) {
    correctAnswers === 3 ?
      HTMLElement.innerHTML = 'You are recognized as top JavaScript fan!' :
      HTMLElement.innerHTML = `You have ${correctAnswers} right answers`;

  }

  function eventHandler(e) {
    let answer = e.target.innerHTML;
    let currentSection = sections[i];
    let nextSection = sections[i + 1];

    if (correctAnswersMap[i] === answer) {
      correctAnswers++;
    }

    hideHTMLElement(currentSection);

    if (nextSection !== undefined) {
      displayHTMLElement(nextSection);
      i++;
    } else {

      displayHTMLElement(results);

      buildResult(correctAnswers, resultField);
    }
  }

}
