(async () => {

    const textParser = res => res.text();

    Handlebars.registerPartial(
        'cat',
        await fetch('./singleCatTemplate.hbs').then(textParser)
    );

    const templateSrc = await fetch('./allCatsTemplate.hbs').then(textParser);
    const template = Handlebars.compile(templateSrc);
    const resultHTML = template({ cats });

    document.querySelector('#allCats').innerHTML = resultHTML;

    document.querySelectorAll('button')
        .forEach(btn => {
            btn.addEventListener('click', showInfo);
        });

    function showInfo(e) {
        const parent = e.target.parentNode;
        const statusDiv = parent.querySelector('div.status');
        const { display } = statusDiv.style;

        if (display === "none") {
            statusDiv.style.display = 'block';
            e.target.textContent = 'Hide status code';
        } else {
            statusDiv.style.display = 'none';
            e.target.textContent = 'Show status code';
        }
    };

})();
