function solve() {
    let input = document.querySelector('#exercise > article > input[type=text]');
    let button = document.querySelector('#exercise > article > button');
    let list = document.querySelectorAll('li');

    if (input === null || button === null || list === null) {
        throw new Error('Error...');
    }

    button.addEventListener('click', addNameToList);

    function getFirstLetterIndex(name) {
        let firstLetter = name[0].toUpperCase();
        return firstLetter.charCodeAt() - 65;
    }

    function appendNameToLetterInList(current, name) {
        return current === '' ? current = name : current += `, ${name}`;
    }

    function prepareName(name) {
        let firstLetter = name[0].toUpperCase();
        let rest = name.substring(1).toLowerCase();
        return firstLetter + rest;
    }

    function addNameToList() {
        let name = input.value;
        let index = getFirstLetterIndex(name);
        let currentNames = list[index].innerHTML;

        list[index].innerHTML = appendNameToLetterInList(currentNames, prepareName(name));

        input.value = '';
    }

}