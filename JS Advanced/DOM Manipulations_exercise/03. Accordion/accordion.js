let extraInfoElement = document.getElementById('extra');
let button = document.getElementsByClassName('button')[0];

if (extraInfoElement === null || button === null) {
    throw new Error('Error...');
}

button.addEventListener('click', toggle);

function toggle(e) {
    e.preventDefault();

    if (button.textContent === 'More') {
        extraInfoElement.style.display = 'block';
        button.textContent = 'Less';
    } else {
        extraInfoElement.style.display = 'none';
        button.textContent = 'More';
    }

}


// Solution for judge. Add onclick="toggle()" to the span tag with class="button"

// function toggle() {
//     let extraInfoElement = document.getElementById('extra');
//     let button = document.getElementsByClassName('button')[0];

//     if (extraInfoElement === null || button === null) {
//         throw new Error('Error...');
//     }

//     if (button.textContent === 'More') {
//         extraInfoElement.style.display = 'block';
//         button.textContent = 'Less'
//     } else {
//         extraInfoElement.style.display = 'none';
//         button.textContent = 'More';
//     }

// }