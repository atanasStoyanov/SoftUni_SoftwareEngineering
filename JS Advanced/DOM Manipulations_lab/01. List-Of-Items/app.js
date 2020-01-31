//To work in judge remove event listener and invoke addItem function with "onclick" attribute of the button in the HTML file.

let list = document.getElementById('items');
let input = document.getElementById('newItemText');
let button = document.querySelector('input[type=button]');

if (list === null || input === null || button === null) {
    throw new Error('Error...');
}

button.addEventListener('click', addItem)

function addItem(e) {
    e.preventDefault();

    let newItem = document.createElement('li');
    newItem.innerHTML = input.value;

    list.appendChild(newItem);

    input.value = '';

}

