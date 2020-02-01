let textField = document.getElementById('newItemText');
let valueField = document.getElementById('newItemValue');
let selectField = document.getElementById('menu');
let button = document.querySelector('body > article > input[type=button]:nth-child(6)');

if (textField === null || valueField === null || selectField === null || button === null){
    throw new Error('Error...');
}

button.addEventListener('click', addItem);

function addItem() {
    let newOption = document.createElement('option');
    newOption.textContent = textField.value;
    newOption.value = valueField.value;

    selectField.appendChild(newOption);

    textField.value = '';
    valueField.value = '';

}

//This is the solution for judge. Add onclick="addItem()" to the input tag with type=button
// function addItem() {
//     let textField = document.getElementById('newItemText');
//     let valueField = document.getElementById('newItemValue');
//     let selectField = document.getElementById('menu');

//     let newOption = document.createElement('option');
//     newOption.textContent = textField.value;
//     newOption.value = valueField.value;

//     selectField.appendChild(newOption);

//     textField.value = '';
//     valueField.value = '';

// }