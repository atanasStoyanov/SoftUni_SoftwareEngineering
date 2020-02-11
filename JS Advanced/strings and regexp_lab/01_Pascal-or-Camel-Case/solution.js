let button = document.querySelector('input[type=button]');

button.addEventListener('click', eventHandler);

function eventHandler() {
  let text = document.getElementById('text').value;
  let namingConvention = document.getElementById('naming-convention').value;
  let resultField = document.getElementById('result');

  resultField.textContent = convertToPascalOrCamelCase(text, namingConvention);
}

function convertToPascalOrCamelCase(str, convention) {

  let conventionsMap = {
    'Camel Case': convertToCamelCase,
    'Pascal Case': convertToPascalCase
  }

  if (conventionsMap.hasOwnProperty(convention)) {
    return conventionsMap[convention](str);
  } else {
    return 'Error!';
  }

}

const isNotEmptyString = e => e !== '';
const changeFirstLetterToUpperCase = word => word.replace(word[0], word[0].toUpperCase());

function convertToCamelCase(str) {

  return str
    .toLowerCase()
    .split(' ')
    .filter(isNotEmptyString)
    .map((word, i) => i !== 0 ? changeFirstLetterToUpperCase(word) : word)
    .join('');
}

function convertToPascalCase(str) {
  return str
    .toLowerCase()
    .split(' ')
    .filter(isNotEmptyString)
    .map(changeFirstLetterToUpperCase)
    .join('');
}



// Solution for Judge. Add onclick="solve()" to the input tag with type = button

// function solve() {
//   let text = document.getElementById('text').value;
//   let namingConvention = document.getElementById('naming-convention').value;
//   let resultField = document.getElementById('result');

//   const isNotEmptyString = e => e !== '';
//   const changeFirstLetterToUpperCase = word => word.replace(word[0], word[0].toUpperCase());


//   function convertToPascalOrCamelCase(str, convention) {

//     let conventionsMap = {
//       'Camel Case': convertToCamelCase,
//       'Pascal Case': convertToPascalCase
//     }

//     if (conventionsMap.hasOwnProperty(convention)) {
//       return conventionsMap[convention](str);
//     } else {
//       return 'Error!';
//     }

//   }

//   function convertToCamelCase(str) {

//     return str
//       .toLowerCase()
//       .split(' ')
//       .filter(isNotEmptyString)
//       .map((word, i) => i !== 0 ? changeFirstLetterToUpperCase(word) : word)
//       .join('');
//   }

//   function convertToPascalCase(str) {
//     return str
//       .toLowerCase()
//       .split(' ')
//       .filter(isNotEmptyString)
//       .map(changeFirstLetterToUpperCase)
//       .join('');
//   }

//   resultField.textContent = convertToPascalOrCamelCase(text, namingConvention);

// }