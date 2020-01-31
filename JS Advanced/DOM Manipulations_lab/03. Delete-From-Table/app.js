const input = document.querySelector('input[name=email]');
const tableCells = document.getElementsByTagName('td');
const result = document.getElementById('result');
const button = document.getElementsByTagName('button')[0];

button.addEventListener('click', deleteByEmail);

function deleteByEmail() {
    let isFound = false;

    for (const cell of tableCells) {

        if (cell.innerHTML === input.value) {
            deleteRow(cell);
            isFound = true;
        }

    }

    showResult(result, isFound);

    input.value = '';

}

function showResult(HTMLElement, isFound) {
    isFound === true ? HTMLElement.textContent = 'Deleted' : HTMLElement.textContent = 'Not found.';
}

function deleteRow(cell) {
    let parent = cell.parentNode;
    parent.remove();
    isFound = false;
}