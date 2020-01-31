// To work in judge add onload="focus()" to the body tag in the HTML and remove window.addEventListener
function focus() {
    let allInputFields = document.querySelectorAll('input[type=text]');

    Array.from(allInputFields)
        .map(field => {
            field.addEventListener('focus', addFocus);
            field.addEventListener('blur', removeFocus);
        });

        function addFocus(e) {
            e.preventDefault();
            let parentDiv = e.target.parentNode;
            parentDiv.classList.add('focused');
        }

        function removeFocus(e) {
            e.preventDefault();
            let parentDiv = e.target.parentNode;
            parentDiv.classList.remove('focused');
        }
}

window.addEventListener('DOMContentLoaded', focus);