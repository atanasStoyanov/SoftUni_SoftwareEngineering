function attachEvents() {
    const loadBtn = document.querySelector('#btnLoad');
    const phoneBookRef = document.querySelector('#phonebook');
    const personInput = document.querySelector('#person');
    const phoneInput = document.querySelector('#phone');
    const createBtn = document.querySelector('#btnCreate');

    createBtn.addEventListener('click', addPersonToPhoneBook);
    loadBtn.addEventListener('click', loadPhoneBook);

    function addPersonToPhoneBook() {
        const person = personInput.value;
        const phone = phoneInput.value;
        const headers = {
            method: 'POST',
            body: JSON.stringify({
                person,
                phone
            })
        }

        personInput.value = '';
        phoneInput.value = '';

        fetch('https://softuni-cd6a9.firebaseio.com/phonebook.json', headers)
            .then(data => {
                loadPhoneBook()
            });
    }

    function loadPhoneBook() {
        fetch('https://softuni-cd6a9.firebaseio.com/phonebook.json')
            .then(data => data.json())
            .then(data => {
                phoneBookRef.innerHTML = '';

                Object.entries(data)
                    .forEach(([id, personInfoObj]) => {
                        let person = `${personInfoObj.person}: ${personInfoObj.phone}`;
                        let li = createHTMLElement('li', null, person);
                        let deleteBtn = createHTMLElement('button', null, 'Delete', [{ k: 'id', v: id }], { name: 'click', func: deletePerson });
                       
                        li.appendChild(deleteBtn);
                        phoneBookRef.appendChild(li);
                    });
            })
    }

    function deletePerson() {
        const id = this.getAttribute('id');

        fetch(`https://softuni-cd6a9.firebaseio.com/phonebook/${id}.json`, {
            method: 'DELETE'
        })
            .then(() => {
                loadPhoneBook();
            })
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