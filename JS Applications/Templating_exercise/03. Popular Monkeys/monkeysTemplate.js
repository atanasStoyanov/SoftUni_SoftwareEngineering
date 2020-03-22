import { monkeys } from './monkeys.js';

(async () => {
    const textParser = (res) => res.text();

    Handlebars.registerPartial(
        'monkey',
        await fetch('./singleMonkeyTemplate.hbs').then(textParser)
    );

    const templateSrc = await fetch('./allMonkeysTemplate.hbs').then(textParser);
    const template = Handlebars.compile(templateSrc);
    const resultHTML = template({ monkeys });

    document.querySelector('section').innerHTML += resultHTML;

    document.querySelectorAll('button')
        .forEach(btn => {
            btn.addEventListener('click', showInfo);
        });

    function showInfo(e) {
        e.preventDefault();

        const parent = e.target.parentNode;
        const infoP = parent.querySelector('p');
        const { display } = infoP.style;

        if (display === 'none') {
            infoP.style.display = 'block';
        } else {
            infoP.style.display = 'none';
        }
    }

})();