let list = document.getElementById('items');
let input = document.getElementById('newText');
let button = document.querySelector('input[type=button]');

if (list === null || input === null || button === null) {
    throw new Error('Error...');
}

button.addEventListener('click', addItem);
list.addEventListener('click', deleteItem);

function addItem(e) {
    e.preventDefault();

    if (input.value !== '') {
        let newItem = document.createElement('li');
        newItem.innerHTML = input.value;

        let deleteLink = createLink('[Delete]', '#');
        newItem.appendChild(deleteLink);

        list.appendChild(newItem);

        input.value = '';
    }

}

function createLink(text, ref) {
    let link = document.createElement('a');
    link.innerHTML = text;
    link.href = ref;

    return link;
}

function deleteItem(e) {
    e.preventDefault();

    let parent = e.target.parentNode;
    parent.remove();
}

// This is the solution for judge... add onclick = "addItem()" on the button element in the HTML 
// function addItem() {
//     let list = document.getElementById('items');
//     let input = document.getElementById('newText');

//     if (list === null || input === null) {
//         throw new Error('Error...');
//     }

//     list.addEventListener('click', deleteItem);

//     let newItem = document.createElement('li');
//     newItem.innerHTML = input.value;

//     let deleteLink = createLink('[Delete]', '#');
//     newItem.appendChild(deleteLink);

//     list.appendChild(newItem);

//     input.value = '';

//     function createLink(text, ref) {
//         let link = document.createElement('a');
//         link.innerHTML = text;
//         link.href = ref;

//         return link;
//     }

//     function deleteItem(e) {
//         let parent = e.target.parentNode;
//         parent.remove();
//     }
// }