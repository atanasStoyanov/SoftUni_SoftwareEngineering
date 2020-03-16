function attachEvents() {
    const elements = {
        loadBtn: document.querySelector('button.load'),
        allCatchesDiv: document.querySelector('#catches'),
        addBtn: document.querySelector('button.add'),
        anglerField: document.querySelector('#addForm > input.angler'),
        weightField: document.querySelector('#addForm > input.weight'),
        speciesField: document.querySelector('#addForm > input.species'),
        locationField: document.querySelector('#addForm > input.location'),
        baitField: document.querySelector('#addForm > input.bait'),
        captureTimeField: document.querySelector('#addForm > input.captureTime'),
        hr: () => document.createElement('hr')
    }

    const baseURL = 'https://fisher-game.firebaseio.com/catches';
    const addLoadURL = `${baseURL}.json`

    elements.loadBtn.addEventListener('click', loadCatches);
    elements.addBtn.addEventListener('click', addNewCatch);

    function addNewCatch(e) {
        e.preventDefault();

        const headers = {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                angler: elements.anglerField.value,
                weight: elements.weightField.value,
                species: elements.speciesField.value,
                location: elements.locationField.value,
                bait: elements.baitField.value,
                captureTime: elements.captureTimeField.value
            })
        }


        fetch(addLoadURL, headers)
            .then(checkResponseStatus)
            .then(() => loadCatches())
            .catch(errorHandler);

        elements.anglerField.value = '';
        elements.weightField.value = '';
        elements.speciesField.value = '';
        elements.locationField.value = '';
        elements.baitField.value = '';
        elements.captureTimeField.value = '';
    }

    function loadCatches() {

        elements.allCatchesDiv.innerHTML = '';

        fetch(addLoadURL)
            .then(checkResponseStatus)
            .then(jsonParse)
            .then(data => {
                Object.entries(data)
                    .forEach(([id, { angler, bait, captureTime, location, species, weight }]) => {
                        let catchDiv = createHTMLElement('div', 'catch', null, [{ k: 'data-id', v: id }]);

                        const anglerLabel = createHTMLElement('label', null, 'Angler');
                        const anglerInput = createHTMLElement('input', 'angler', null, [{ k: 'type', v: 'text' }, { k: 'value', v: angler }]);

                        const weightLabel = createHTMLElement('label', null, 'Weight');
                        const weightInput = createHTMLElement('input', 'weight', null, [{ k: 'type', v: 'number' }, { k: 'value', v: weight }]);

                        const speciesLabel = createHTMLElement('label', null, 'Species');
                        const speciesInput = createHTMLElement('input', 'species', null, [{ k: 'type', v: 'text' }, { k: 'value', v: species }]);

                        const locationLabel = createHTMLElement('label', null, 'Location');
                        const locationInput = createHTMLElement('input', 'location', null, [{ k: 'type', v: 'text' }, { k: 'value', v: location }]);

                        const baitLabel = createHTMLElement('label', null, 'Bait');
                        const baitInput = createHTMLElement('input', 'bait', null, [{ k: 'type', v: 'text' }, { k: 'value', v: bait }]);

                        const timeLabel = createHTMLElement('label', null, 'Capture Time');
                        const timeInput = createHTMLElement('input', 'captureTime', null, [{ k: 'type', v: 'number' }, { k: 'value', v: captureTime }]);

                        const updateBtn = createHTMLElement('button', 'update', 'Update', null, { name: 'click', func: updateCatch });
                        const deleteBtn = createHTMLElement('button', 'delete', 'Delete', null, { name: 'click', func: deleteCatch });

                        catchDiv = appendChildrenToParent([anglerLabel, anglerInput, elements.hr(), weightLabel, weightInput, elements.hr(), speciesLabel, speciesInput, elements.hr(), locationLabel, locationInput, elements.hr(), baitLabel, baitInput, elements.hr(), timeLabel, timeInput, elements.hr(), updateBtn, deleteBtn], catchDiv);
                        elements.allCatchesDiv.appendChild(catchDiv);

                    })
            })
            .catch(errorHandler);
    }

    function updateCatch() {
        const id = this.parentNode.getAttribute('data-id');
        const updateURL = `${baseURL}/${id}.json`;

        const angler = this.parentNode.querySelector('.angler');
        const weight = this.parentNode.querySelector('.weight');
        const species = this.parentNode.querySelector('.species');
        const location = this.parentNode.querySelector('.location');
        const bait = this.parentNode.querySelector('.bait');
        const captureTime = this.parentNode.querySelector('.captureTime');

        const headers = {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                angler,
                weight,
                species,
                location,
                bait,
                captureTime
            })
        }

        fetch(updateURL, headers)
            .then(checkResponseStatus)
            .then(() => loadCatches())
            .catch(errorHandler);
    }

    function deleteCatch() {
        const id = this.parentNode.getAttribute('data-id');
        const deleteURL = `${baseURL}/${id}.json`;

        this.parentNode.remove();

        const headers = {
            method: 'DELETE'
        }

        fetch(deleteURL, headers)
            .then(checkResponseStatus)
            .catch(errorHandler);
    }

    const checkResponseStatus = res => {
        if (res.status > 400) {
            throw new Error(res.statusText);
        }
        return res;
    };

    const jsonParse = (res) => res.json();

    const errorHandler = (err) => {
        console.log('Error');
    }

    function createHTMLElement(tagName, className, textContent, atributes, event) {
        let element = document.createElement(tagName);

        if (className) {
            element.classList.add(className);
        }

        if (textContent) {
            element.textContent = textContent;
        }

        if (atributes) {
            atributes.forEach(a => element.setAttribute(a.k, a.v));
        }

        if (event) {
            element.addEventListener(event.name, event.func)
        }

        return element;
    }

    function appendChildrenToParent(childrenArr, parent) {
        childrenArr.forEach(c => parent.appendChild(c));
        return parent;
    }
}

attachEvents();

