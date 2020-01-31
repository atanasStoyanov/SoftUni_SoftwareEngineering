function validate() {

    let input = document.getElementById('email');
    let emailPattern = /^[a-z]+@[a-z]+\.[a-z]+$/g;

    input.addEventListener('change', validate);

    function validate(e) {
        e.preventDefault();
        let email = e.target.value
        emailPattern.test(email) ? e.target.classList.remove('error') :  e.target.classList.add('error');
    }

}