//use live server to run this project

(function () {
    const elements = {
        inputField: document.querySelector('#towns'),
        loadBtn: document.querySelector('#btnLoadTowns'),
        rootDiv: document.querySelector('#root'),
        formRef: document.querySelector('form')
    };

    elements.loadBtn.addEventListener('click', loadCities);

    function loadCities(e) {
        e.preventDefault();

        const citiesInput = elements.inputField.value;
        const citiesArr = citiesInput.split(', ');

        fetch('./template.hbs')
            .then(res => res.text())
            .then(templateHbs => {

                const template = Handlebars.compile(templateHbs);
                const resultHTML = template({citiesArr});

                elements.rootDiv.innerHTML = resultHTML;

                resetForm(elements.formRef);
            })
            .catch(errorHandler);
    };

    function resetForm(form) {
        form.reset();
    };

    function errorHandler(err) {
        console.log(err);
    };

}());