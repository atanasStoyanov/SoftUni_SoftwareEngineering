function focus() {
    let allInputFields = document.querySelectorAll('input[type=text]');

    Array.from(allInputFields)
        .map(field => {
            field.addEventListener('focus', addFocus);
            field.addEventListener('blur', removeFocus);
        });

        function addFocus(e) {
            let parentDiv = e.target.parentNode;
            parentDiv.classList.add('focused');
        }

        function removeFocus(e) {
            let parentDiv = e.target.parentNode;
            parentDiv.classList.remove('focused');
        }
}