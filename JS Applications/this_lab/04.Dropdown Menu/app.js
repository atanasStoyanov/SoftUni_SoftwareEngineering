function solve() {
    let chooseBtn = document.getElementById('dropdown');
    let colorsList = document.getElementById('dropdown-ul');
    let box = document.getElementById('box');

    chooseBtn.addEventListener('click', showColorsList);

    function showColorsList(e) {
        e.preventDefault();

        if (colorsList.style.display === 'none' || colorsList.style.display === '') {
            colorsList.style.display = 'block';

            colorsList.addEventListener('click', changeBoxColor);

        } else {
            dropDownMenu.style.display = 'none';
            box.style.backgroundColor = 'black';
            box.style.color = 'white'
        }

    }

    function changeBoxColor(e) {
        e.preventDefault();

        if (e.target.tagName === 'LI') {
            box.style.backgroundColor = e.target.textContent;
            box.style.color = 'black';
        }
    }
}